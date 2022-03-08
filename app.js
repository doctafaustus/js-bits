// Core modules
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const favicon = require('serve-favicon');
const compression = require('compression'); 
const admin = require('firebase-admin');

// Globals
const $ = require('cheerio').default;

// Express app / Middleware
const app = express();
app.use(compression());
app.use(express.static(`${__dirname}/client/dist`));
app.use(express.static(`${__dirname}/client/static`));
app.use(favicon(`${__dirname}/client/public/favicon.ico`));

// Cloudstore config
let serviceAccount = process.env.SERVICE_ACCOUNT_KEY;
if (!process.env.PORT) {
  serviceAccount = require('./private/serviceAccountKey.json');
} else {
  serviceAccount = JSON.parse(serviceAccount);
}
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

// Allow CORS requests locally
if (!process.env.PORT) {
  app.use(cors({
    origin: ['http://localhost:8080', 'http://localhost:8081'],
    methods: ['GET', 'POST'],
    credentials: true 
  }));
}


// Keep paths using the app.html file on direct route hits
app.use('/*', (req, res, next) => {
  if (/^\/api\//.test(req.originalUrl)) next();
  else if (/\/snippet\//.test(req.originalUrl)) updateMetaTags(req, res);
  else if (/bug-bash/.test(req.originalUrl)) next();
  else res.sendFile(`${__dirname}/client/dist/index.html`);
});

// Bug Bash Routes
require('./bug-bash-routes.js')(app);

async function updateMetaTags(req, res) {
  // First get and parse snippets array from app src
  const snippetsText = await fs.promises.readFile(`${__dirname}/client/src/snippets.js`, 'utf-8');
  const startPos = snippetsText.search(/\[/);
  const endPos = snippetsText.lastIndexOf('];') + 1;
  const trimmedSnippetText = snippetsText.substring(startPos, endPos);

  const stringifiedArr = JSON.stringify(eval('(' + trimmedSnippetText + ')'));
  const snippetsArr = JSON.parse(stringifiedArr);

  // Retrieve snippet object that includes the current URL slug
  const snippetSlug = req.originalUrl.substring(req.originalUrl.indexOf('/snippet/')).replace('/snippet/', '');
  const snippetObj = snippetsArr.find(snippet => snippet.slug === snippetSlug);

  const baseFile = `${__dirname}/client/dist/index.html`;
  if (!snippetObj) return res.sendFile(baseFile);

  // Update the meta tag properties in the built bundle
  const baseHTML = await fs.promises.readFile(baseFile, 'utf-8');
  const tempHTML = baseHTML.replace('<html lang=en>', '<article>').replace('</html>', '</article>');

  const $base = $(tempHTML);

  $base.find('meta[property=og\\:url]').attr('content', `${req.protocol}://${req.get('host')}${req.originalUrl}`);
  $base.find('meta[property=og\\:type]').attr('content', 'article');
  $base.find('meta[property=og\\:title]').attr('content', snippetObj.title);
  $base.find('meta[property=og\\:image]').attr('content', snippetObj.image);
  $base.find('meta[property=og\\:description]').attr('content', snippetObj.desc);

  // Send the modified HTML as the response
  res.send($.html($base));
}

app.get('/api/tiktok', (req, res) => {
  console.log('/api/tiktok');

  db.collection('tiktok-videos').doc('mainData').get().then(doc => {
    const videoData = doc.data().tiktokVideos;

    res.json(JSON.parse(videoData));
  });
});

app.listen(process.env.PORT || 8081, () => {
  console.log('App running...');
});
