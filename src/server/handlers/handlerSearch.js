const path = require("path");
const fs = require("fs");
const httpReq = require("../httpReq.js");
const getdata = require("../queries/getData");

const handler_Search = (req, res) => {
  console.log(req.url);
  const query = req.url.split("=")[1];
  // const queryForDB = query.split("+").join(" ");
  // var rating = getData(queryForDB);
  // let resObj = {
  //   moviePoster: "",
  //   movieName: "",
  //   movieYear: "",
  //   movieRating: "",
  //   movieInfo: ""
  // };
  httpReq(query, (error, body) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(body["results"]);
    filmObj = body;

    res.end(filmObj);
  });
};

module.exports = handler_Search;
