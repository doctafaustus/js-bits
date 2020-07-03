// Core modules
const express = require('express');
const cors = require('cors');
const fs = require('fs');

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
  if (/^\/(api|auth)\//.test(req.originalUrl)) next();
  else res.sendFile(`${__dirname}/client/dist/app.html`);
});

app.get('/api/test', (req, res) => {
  console.log('/test');
  res.sendFile(`${__dirname}/snippets/cleaner-settimeout-callbacks.html`);
});


app.listen(process.env.PORT || 8081, () => {
  console.log('App running...');
});