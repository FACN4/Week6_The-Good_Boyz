BEGIN;

DROP TABLE IF EXISTS users, movies, reviews, likes;


CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(10) NOT NULL,
  last_name VARCHAR(10) NOT NULL,
);

CREATE TABLE reviews(
  id SERIAL PRIMARY KEY,
  reviews TEXT NOT NULL,
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE user_movie_review(
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
);

COMMIT;
