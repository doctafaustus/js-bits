const path = require('path');
const Cookies = require('cookies');

module.exports = app => {

  app.get('/bug-finder/emoji-shop', (req, res) => {
    const cookie = new Cookies(req, res);

    cookie.set('vipCustomerLevel', 'platinum', { expires: setDate(180) });
    res.sendFile(path.join(__dirname, 'client/static/bug-finder/emoji-shop.html'));
  });

}


function setDate(days = 180) {
  let targetDate = new Date().getTime() + (days * 24 * 60 * 60 * 1000);
  targetDate = new Date().setTime(targetDate);
  return new Date(targetDate);
}