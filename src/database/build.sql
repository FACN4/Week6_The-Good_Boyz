BEGIN;

DROP TABLE IF EXISTS movies, reviews;

CREATE TABLE reviews(
  id SERIAL PRIMARY KEY,
  movie_id INTEGER NOT NULL REFERENCES movies(id),
  full_name VARCHAR(20),
  review TEXT NOT NULL
  rating INTEGER CHECK (rating > 0 AND rating < 6)
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE
);



COMMIT;
