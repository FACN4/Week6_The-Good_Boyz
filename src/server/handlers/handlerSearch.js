const path = require("path");
const fs = require("fs");
const httpReq = require("../httpReq.js");
const getdata = require("../queries/getData");

const handler_Search = (req, res) => {
  console.log(req.url);
  const query = req.url.split("=")[1];
  const queryForDB = query.split("+").join(" ");
  console.log((">>>>>>>>>>>>QUERYFORDB HANDLER SEARCH \n"+ queryForDB));
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
      getdata(queryForDB,(err,result1)=>{
      if (err){
        console.log(err);
      }else{
        let result =result1[0]["coalesce"];
        result = result.substring(0,3);
        
         resObj.movieRating=result;
         resObj = JSON.stringify(resObj);
         res.end(resObj);

      }
    });

  });
};

module.exports = handler_Search;
