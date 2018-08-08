BEGIN;

DROP TABLE IF EXISTS movies, reviews;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE
);


CREATE TABLE reviews(
  id SERIAL PRIMARY KEY,
  movie_id INTEGER NOT NULL REFERENCES movies(id),
  full_name VARCHAR(20),
  review TEXT NOT NULL,
  rating INTEGER
);


COMMIT;
