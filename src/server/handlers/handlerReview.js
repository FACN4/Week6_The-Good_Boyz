const path = require("path");
const fs = require("fs");
const addReview = require("../queries/postData");

const handler_Review = (req, res) => {
  const query = req.url.split("=")[1];
  const arr = query.split("_");
  const userQ = arr[0];
  const movieQ = arr[1];
  const ratingQ = arr[2];
  const reviewQ = arr[3];

  postData(userQ, movieQ, ratingQ, reviewQ, (err, res) => {
    if (err) {
      res.end("error");
      return;
    }
    res.end('success');
  });
};

module.exports = handler_Review;
