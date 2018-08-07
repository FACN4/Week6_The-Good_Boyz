const path = require('path');
const fs = require('fs');
const httpReq = require('./httpReq.js');

const handler500 = (res) => {
  res.writeHead(500, { 'content-type': 'text/plain' });
  res.end('server error');
};

const handlerHome = (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), (err, file) => {
    if (err) {
      handler500(res);
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  });
};

const handlerPublic = (req, res, url) => {
  const extension = url.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    jpg: 'image/jpg',
    gif: 'image/gif',
  };
  pathfile = path.join(__dirname, '..', 'public', url);

  fs.readFile(pathfile, (err, file) => {
    if (err) {
      handler500(res);
    } else {
      res.writeHead(200, { 'Content-Type': extensionType[extension] });
      res.end(file);
    }
  });
};
// const handlerExchange = (req, res) => {
//   const query = req.url.split("=")[1];
//   httpReq(query, (error, body) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     res.end(body);
//   });
// };

const handler404 = (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'public', '404.html'), (err, file) => {
    if (err) {
      handler500(res);
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(file);
    }
  });
};

module.exports = {
  handlerHome,
  handlerPublic,
  // handlerExchange,
  handler404,
};
