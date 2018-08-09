const databaseConnection = require("../../database/connection");
// get movie id
const getMovieId = "";
// get rating from reviews -- mind the parentheses
const getRating =
  "(SELECT AVG(rating) FROM reviews R where R.movie_id=(SELECT movies.id FROM movies where name=$1))";

const getData = (movie_name, cb) => {
  databaseConnection.query(
    "select coalesce((SELECT AVG(rating) FROM reviews R where R.movie" +
      "_id=(SELECT movies.id FROM movies where name=$1)), 0)",
    [movie_name],
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

module.exports = getData;
