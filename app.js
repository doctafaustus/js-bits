const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cheerio = require('cheerio');
const fs = require('fs');
const fetch = require('cross-fetch');


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/articles/:slug', (req, res) => {
  const slug = req.params.slug;
  res.sendFile(__dirname + `/articles/${slug}.html`);
});

app.get('/articles/:slug', (req, res) => {
  const slug = req.params.slug;
  const fileContent = fs.readFileSync(path.join(__dirname, 'views', 'index.ejs'), 'utf8');
  const $ = cheerio.load(fileContent);

  const basePath = 'https://dev.to/api/articles/js_bits_bill';
  const url = `${basePath}/${slug}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      $('meta[property="og:url"]').attr('content', `https://jsbits-yo.com/articles/${data.slug}`);
      $('meta[property="og:type"]').attr('content', 'article');
      $('meta[property="og:title"]').attr('content', data.title);
      $('meta[property="og:image"]').attr('content', data.social_image);
      $('meta[property="og:description"]').attr('content', data.description);

      const modifiedFileContent = $.html();
      res.send(modifiedFileContent);
    })
    .catch(err => {
      console.error(err);
      res.render('index');
    });
});

app.get('/linkedin-badge', (req, res) => {
  res.render('linkedin-badge');
});

app.listen(process.env.PORT || 8080, () => {
  console.log('App running...');
});
