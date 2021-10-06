const express = require('express')
const app = express();
const port = 8080;
const fs = require('fs');
var http = require('http')

app.get('/main.css', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/css'});
  res.write(fs.readFileSync(__dirname + '/main.css', 'utf8'));
  res.end();
});

app.get('/*', (req, res) => {
  let output = `<!doctype html>
  <html>
  <head>
    <link rel="stylesheet" href="/main.css" type="text/css" />
    <title>GAMINGREWARDS</title>
  </head>
  <body class="view-homepage" itemscope="" itemtype="http://schema.org/WebPage" cz-shortcut-listen="true"><div class="coming-soon">
      <div class="coming-soon-top"></div>
      <div class="coming-soon-bottom"></div>
      <div class="coming-soon-content">
          <div>
              <img src="https://storage.googleapis.com/groupby-demo-images/gamingrewards/GAMING-REWARDS.png" class="pg-title">
          </div>
          <div class="icons">
              <div>
                  <img src="https://storage.googleapis.com/groupby-demo-images/gamingrewards/joystick.svg">
                  <img src="https://storage.googleapis.com/groupby-demo-images/gamingrewards/gameboy.svg">
                  <img src="https://storage.googleapis.com/groupby-demo-images/gamingrewards/snes.svg">
                  <img src="https://storage.googleapis.com/groupby-demo-images/gamingrewards/macintosh.svg">
              </div>
          </div>
          <div>
              <img src="https://storage.googleapis.com/groupby-demo-images/gamingrewards/COMING-SOON.png" class="pg-footer">
          </div>
      </div>
  </div>
  </body>
  </html>`;
  res.send(output);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
