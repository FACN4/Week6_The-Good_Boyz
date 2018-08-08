const databaseConnection = require("../../database/connection");

const postData = (user_name, movie_name, rating, review, cb) => {

  //  add movie to movies table
  const addMovie = "INSERT INTO movie (name) VALUES ($1); ";
  // get movie id
  const getMovieId = "SELECT movies.id INTO TEMP m_id FROM movies where name=$1 "
  // add review to reviews
  const addReview = "INSERT INTO reviews (movie_id,full_name,review,rating) VALUES ((SELECT movies.id FROM m_id LIMIT 1;),$2,$4,$3) ;";

  databaseConnection.query(
    //query to add movie name to the movie table
    "BEGIN; "+ addMovie +getMovieId+ addReview +" COMMIT;",
    [movie_name,user_name,rating,review],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = postData;
