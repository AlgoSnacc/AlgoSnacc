// establish sql connection
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.ELEPHANTSECRET,
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
