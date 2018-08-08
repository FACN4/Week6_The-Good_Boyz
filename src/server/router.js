const handlers = require("./handlers/handler.js");

const router = (req, res) => {
  const url = req.url;

  if (url === "/") {
    handlers.handlerHome(req, res);
  } else if (url.includes("/review")) {
    handlers.handlerReview(req, res, url);
  } else if (url.includes("/search")) {
    handlers.handlerSearch(req, res, url);
  } else if (url.includes("/topMovies")) {
    handlers.handlerTopMovies(req, res, url);
  } else if (["/style.css", "/dom.js", "/xhr.js"].includes(url)) {
    handlers.handlerPublic(req, res, url);
  } else {
    handlers.handler404(req, res);
  }
};

module.exports = router;
