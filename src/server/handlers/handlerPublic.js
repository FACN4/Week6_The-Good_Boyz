const path = require("path");

const fs = require("fs");
const error500 = require("./error500.js");

const handler_Public = (req, res, url) => {
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpg",
    gif: "image/gif"
  };
  pathfile = path.join(__dirname, "../../../", "public", url);

  fs.readFile(pathfile, (err, file) => {
    if (err) {
      error500(res);
    } else {
      res.writeHead(200, { "Content-Type": extensionType[extension] });
      res.end(file);
    }
  });
};

module.exports = handler_Public;
