const path = require('path');

module.exports = app => {

  app.get('/bug-finder/bug-1', (req, res) => {
    console.log('/bug-1');
    res.sendFile(path.join(__dirname, 'client/public/bug-finder/bug-1.html'));
  });

}