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
  else if (/\/snippet\//.test(req.originalUrl)) updateMetaTags(next);
  else console.log('afdas') || res.sendFile(`${__dirname}/client/dist/index.html`);
});

function updateMetaTags(next) {
  console.log('nEED TO UPDATE');
  next();
}

app.get('/api/test', async (req, res) => {
  console.log('/test');

  // const snippetHTML = await fs.promises.readFile(`${__dirname}/snippets/cleaner-settimeout-callbacks.html`, 'utf-8');
  // const $snippet = $(snippetHTML);
  // const metaTitleTag = $snippet.find('meta[property=og\\:title]');
  // const metaImageTag = $snippet.find('meta[property=og\\:image]');
  // const metaDescTag = $snippet.find('meta[property=og\\:description]');
  // const metaTags = [$.html(metaTitleTag), $.html(metaImageTag), $.html(metaDescTag)].join();


  const snippetsText = await fs.promises.readFile(`${__dirname}/client/src/snippets.js`, 'utf-8');
  const startPos = snippetsText.search(/\[/);
  const endPos = snippetsText.lastIndexOf('];') + 1;
  const trimmedSnippetText = snippetsText.substring(startPos, endPos);
  const snippetsArr = JSON.parse(trimmedSnippetText);





  const baseHTML = await fs.promises.readFile(`${__dirname}/client/dist/index.html`, 'utf-8');
  const tempHTML = baseHTML.replace('<html lang=en>', '<article>').replace('</html>', '</article>');
  const $base = $(tempHTML);
  console.log('?', $base.find('meta[property=og\\:title]').length);
});


app.listen(process.env.PORT || 8081, () => {
  console.log('App running...');
});