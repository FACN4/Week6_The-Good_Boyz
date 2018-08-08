const databaseConnection = require('../../database/connection');
// get movie id
const getMovieId = "(SELECT movies.id INTO TEMP m_id1 FROM movies where name=$1)"
// get rating from reviews -- mind the parentheses
const getRating = "(SELECT AVG(rating) FROM reviews R where R.movie_id='+getMovieId+')";

const getData = (movie_name,cb) => {
  databaseConnection.query("select coalesce("+getRating+", 0)",[movie_name] ,(err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;
