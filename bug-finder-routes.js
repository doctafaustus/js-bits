const path = require('path');
const Cookies = require('cookies');
const bodyParser = require('body-parser');



module.exports = app => {

  app.use(bodyParser.json({ limit: '1mb' }));

  app.get('/bug-finder/emoji-shop', (req, res) => {
    const cookie = new Cookies(req, res);

    cookie.set('vipCustomerLevel', 'platinum', { expires: setDate(180) });
    res.sendFile(path.join(__dirname, 'client/static/bug-finder/emoji-shop.html'));
  });

  app.post('/bug-finder/collect', (req, res) => {
    console.log('/bug-finder/collect', req.body.event);
    res.json({ success: true });
  });

  app.get('/bug-finder/pipe-to-crm/:event', (req, res) => {
    console.log('/bug-finder/pipe-to-crm');
    res.json({
      success: true,
      callback: `
        const g = 'google';
        const a = 'analytics';
        const mockGA = g + '_' + a;

        Object.defineProperty(window[mockGA], 'push', { value: () => {} });
      `
    });
  });


  // BUG BASH
  app.get('/bug-bash/gem-wizard', (req, res) => {
    const cookie = new Cookies(req, res);

    cookie.set('vipCustomerLevel', 'platinum', { expires: setDate(180) });
    res.sendFile(path.join(__dirname, 'client/static/bug-bash/gem-wizard.html'));
  });

  app.post('/bug-bash/collect', (req, res) => {
    console.log('/bug-bash/collect', req.body.event);
    res.json({ success: true });
  });

  app.get('/bug-bash/pipe-to-crm/:event', (req, res) => {
    console.log('/bug-finder/pipe-to-crm');
    res.json({
      success: true,
      callback: `
        const g = 'google';
        const a = 'analytics';
        const mockGA = g + '_' + a;

        Object.defineProperty(window[mockGA], 'push', { value: () => {} });
      `
    });
  });

  app.get('/bug-bash/reviews/:index', (req, res) => {
    const { index } = req.params;

    const reviews = [
      { 
        review: '“I thought all magical gems were the same until I found this site. Now I only shop at GemWizard.”',
        author: 'Clementina DuBuque'
      },
      {
        review: 'Our guild loves these gems! We always look forward to the next GemWizard shipment!',
        author: 'Anders Lee',
      },
      {
        review: 'The crystals are so powerful! I\'m new to wizardry and these have helped me so much!',
        author: 'Alexandra Mara',
      },
      {
        review: 'Great gems! I was slightly hesitant to buy because of the price, but I\'m really glad I did!',
        author: 'Rebecca Thurston',
      },
      {
        review: 'Great quality and reasonable prices for a magical crystals. I love GemWizard!!',
        author: 'Tony Hansen',
      }
    ];

    res.json({ review: reviews[index] });
  });


}


function setDate(days = 180) {
  let targetDate = new Date().getTime() + (days * 24 * 60 * 60 * 1000);
  targetDate = new Date().setTime(targetDate);
  return new Date(targetDate);
}