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
  else if (/\/snippet\//.test(req.originalUrl)) updateMetaTags(req.originalUrl, res);
  else console.log('afdas') || res.sendFile(`${__dirname}/client/dist/index.html`);
});

async function updateMetaTags(originalUrl, res) {
  console.log('nEED TO UPDATE');

  const snippetsText = await fs.promises.readFile(`${__dirname}/client/src/snippets.js`, 'utf-8');
  const startPos = snippetsText.search(/\[/);
  const endPos = snippetsText.lastIndexOf('];') + 1;
  const trimmedSnippetText = snippetsText.substring(startPos, endPos);
  const snippetsArr = JSON.parse(trimmedSnippetText);

  const snippetSlug = originalUrl.substring(originalUrl.indexOf('/snippet/')).replace('/snippet/', '');
  console.log('snippetSlug', snippetSlug);

  const snippetObj = snippetsArr.find(snippet => snippet.slug === snippetSlug);

  const baseHTML = await fs.promises.readFile(`${__dirname}/client/dist/index.html`, 'utf-8');
  const tempHTML = baseHTML.replace('<html lang=en>', '<article>').replace('</html>', '</article>');
  const $base = $(tempHTML);

  $base.find('meta[property=og\\:title]').attr('content', snippetObj.title);
  $base.find('meta[property=og\\:image]').attr('content', snippetObj.image);
  $base.find('meta[property=og\\:description]').attr('content', snippetObj.desc);

  console.log('?', $.html($base));


  res.send($.html($base));
}

app.get('/api/test', (req, res) => {
  console.log('/test');
  updateMetaTags();

  // const snippetHTML = await fs.promises.readFile(`${__dirname}/snippets/cleaner-settimeout-callbacks.html`, 'utf-8');
  // const $snippet = $(snippetHTML);
  // const metaTitleTag = $snippet.find('meta[property=og\\:title]');
  // const metaImageTag = $snippet.find('meta[property=og\\:image]');
  // const metaDescTag = $snippet.find('meta[property=og\\:description]');
  // const metaTags = [$.html(metaTitleTag), $.html(metaImageTag), $.html(metaDescTag)].join();
});


app.listen(process.env.PORT || 8081, () => {
  console.log('App running...');
});