const path = require("path");
const fs = require("fs");
const httpReq = require("../httpReq.js");
const getdata = require("../queries/getData");

const handler_Search = (req, res) => {
  console.log(req.url);
  const query = req.url.split("=")[1];
  // const queryForDB = query.split("+").join(" ");
  let resObj = {
    moviePoster: "",
    movieName: "",
    movieYear: "",
    movieRating: "",
    movieInfo: ""
  };
  httpReq(query, (error, body) => {
    if (error) {
      console.log(error);
      return;
    }
    let movieObj = JSON.parse(body).results[0];
    resObj.moviePoster =
      "http://image.tmdb.org/t/p/w500" + movieObj.poster_path;
    resObj.movieName = movieObj.title;
    resObj.movieYear = movieObj.release_date;
    resObj.movieInfo = movieObj.overview;
    resObj.movieRating = "3";
    resObj = JSON.stringify(resObj);
    res.end(resObj);
  });
};

module.exports = handler_Search;
