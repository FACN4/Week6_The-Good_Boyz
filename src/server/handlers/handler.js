const handler404 = require("./handler404.js");
const handlerHome = require("./handlerHome.js");
const handlerPublic = require("./handlerPublic.js");
const handlerReview = require("./handlerReview.js");
const handlerSearch = require("./handlerSearch.js");
const handlerTopMovies = require("./handlerTopMovies.js");

module.exports = {
  handler404,
  handlerHome,
  handlerPublic,
  handlerReview,
  handlerSearch,
  handlerTopMovies
};
