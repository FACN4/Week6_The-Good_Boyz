const request = require("request");

const apiKey = "c00ce90c9b78fb2714f5be76248f56f6";
const httpReq = (query, callback) => {
  const APIurl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  request(APIurl, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    callback(null, body);
  });
};

module.exports = httpReq;
