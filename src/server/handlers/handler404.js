const path = require("path");
const fs = require("fs");
const error500 = require("./error500.js");

const handler_404 = (req, res) => {
  fs.readFile(
    path.join(__dirname, "../../../", "public", "404.html"),
    (err, file) => {
      if (err) {
        error500(res);
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(file);
      }
    }
  );
};

module.exports = handler_404;
