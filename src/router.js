const handlers = require("./handlers");

const router = (req, res) => {
  const url = req.url;

  if (url === "/") {
    handlers.handlerHome(req, res);
  }
  // else if (url.includes("/filmAPI")) {
  //   handlers.handlerExchange(req, res, url);
  // }
  else if (["/style.css", "/dom.js", "/xhr.js"].includes(url)) {
    handlers.handlerPublic(req, res, url);
  } else {
    handlers.handler404(req, res);
  }
};

module.exports = router;
