const request = require('request');

const httpReq = (query, callback) => {
  const APIurl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  request(APIurl, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    callback(null, body);
    // console.log(body);
    // return body;
  });
};

module.exports = httpReq;
