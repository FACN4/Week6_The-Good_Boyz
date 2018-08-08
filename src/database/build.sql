BEGIN;

DROP TABLE IF EXISTS users, movies, reviews, likes;

CREATE TABLE reviews(
  id SERIAL PRIMARY KEY,
  movie_id INTEGER NOT NULL REFERENCES movies(id),
  full_name VARCHAR(20),
  reviews TEXT NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);



COMMIT;
