// establish sql connection
const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();
const elephantSecret = require("../_secret/elephantSecret");

const pool = new Pool({
  connectionString: elephantSecret.url,
});

pool.on("connect", () => {
  console.log("connected to the db");
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('exectued query', text);
    return pool.query(text, params, callback);
  },
};
