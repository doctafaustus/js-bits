const puppeteer = require('puppeteer');


async function tiktokScraper() {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.tiktok.com/@js_bits', { waitUntil: 'load' });

  const content = await page.evaluate(() => {
      const dataScript = document.querySelector('#__NEXT_DATA__');
      const data = JSON.parse(dataScript.innerHTML);
      const items = data.props.pageProps.items;

      return items.map(item => {
      return { 
          id: item.id,
          title: item.desc.replace(/\s#.+/, '')
      };
      });
  });
  console.log('content', content);

  // Note that Puppeteer only sees 4 video cards
  const videoCards = await page.$$('.tt-feed .image-card');
  for (let i = 0; i < 4; i++) {
    await videoCards[i].screenshot({ path: `tiktok-images/${content[i].id}.jpg` });  
  }

  await browser.close();
}

module.exports = tiktokScraper;
