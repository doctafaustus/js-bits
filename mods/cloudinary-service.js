const cloudinary = require('cloudinary');
const fs = require('fs');


const cloudinarySecret = process.env.PORT ?
  process.env.CLOUDINARY_SECRET : 
  fs.readFileSync(`${__dirname.replace('\\mods', '')}/private/cloudinary_secret.txt`).toString();


cloudinary.config({ 
  cloud_name: 'dzynqn10l', 
  api_key: '118568662192166', 
  api_secret: cloudinarySecret 
});


function initCloudinaryRoute(app) {
  app.get('/api/tiktok', (req, res) => {
    console.log('/api/tiktok');

    cloudinary.v2.api.resources_by_tag('tiktok', { context: true }, (err, result) => {
      if (err) return res.json({ err: 'No videos found!' });
      res.json(result);
    });
  });
}

module.exports = initCloudinaryRoute;
