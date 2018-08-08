const { Pool } = require("pg");
const url = require("url");

const env = require("env2");
env("./config.env");

if (!process.env.WEEK6_DB_PROJECT_URL) {
  throw new Error("Environment variable DATABASE_URL must be set");
}

const options = {
  connectionString: process.env.WEEK6_DB_PROJECT_URL
  // host: params.hostname,
  // port: params.port,
  // database: params.pathname.split("/")[1],
  // max: process.env.DB_MAX_CONNECTIONS || 2
};

module.exports = new Pool(options);
