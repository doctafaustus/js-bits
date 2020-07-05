// Core modules
const express = require('express');
const cheerio = require('cheerio');
const cors = require('cors');
const fs = require('fs');


// Globals
const $ = require('cheerio');

// Express app / Middleware
const app = express();
app.use(express.static(`${__dirname}/client/dist`));


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
  else res.sendFile(`${__dirname}/client/dist/index.html`);
});

async function updateMetaTags(req, res) {
  // First get and parse snippets array from app src
  const snippetsText = await fs.promises.readFile(`${__dirname}/client/src/snippets.js`, 'utf-8');
  const startPos = snippetsText.search(/\[/);
  const endPos = snippetsText.lastIndexOf('];') + 1;
  const trimmedSnippetText = snippetsText.substring(startPos, endPos);
  const snippetsArr = JSON.parse(trimmedSnippetText);

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


app.listen(process.env.PORT || 8081, () => {
  console.log('App running...');
});