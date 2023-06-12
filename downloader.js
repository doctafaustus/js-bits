const fetch = require('cross-fetch');
const fs = require('fs');
const cheerio = require('cheerio');
const hljs = require('highlight.js');

const slug = process.argv[2];
const basePath = 'https://dev.to/api/articles/js_bits_bill';
const url = `${basePath}/${slug}`;

if (!slug) {
  console.error('Please provide a dev.to slug as an argument');
  process.exit(1);
}

fetchArticle(url);

async function fetchArticle(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch URL (${response.status}): ${url}`);
    }

    const data = await response.json();
    const articleHTML = `
      <article>
        <div id="article-head">
          <h1>${data.title}</h1>
          <div id="article-info">
            <div id="avatar-container">
              <img src="${data.user.profile_image_90}">
            </div>
            <div id="author-and-date">
              <div id="author">Bill Coloe</div>
              <div id="date">Posted on ${new Date(data.created_at).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
        <div id="article-body">
          ${data.body_html}
        </div>
      </article>
    `;

    const $ = cheerio.load(articleHTML);
    const codeBlocks = $('pre code');
    codeBlocks.each((i, block) => {
      const $block = $(block);
      const $pre = $block.closest('pre');
      const language = $pre.attr('class').replace('highlight ', '');
      console.log('language', language);

      const code = $block.text();
      const highlightedCode = hljs.highlight(code, {language}).value;
      $block.html(highlightedCode);
    });
    const finalHTML = $.html();


    fs.writeFile(`articles/${slug}.html`, finalHTML, (err) => {
      if (err) {
        console.error(`Failed to save file: ${err.message}`);
        return;
      }

      console.log('\x1b[34m%s\x1b[0m', `File saved to: ${slug}.html`);
    });
  } catch (err) {
    console.error(`Failed to fetch article: ${err.message}`);
  }
}
