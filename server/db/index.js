const { Pool } = require('pg')

// var config = {
//     user: process.env.PG_USER || "postgres",
//     host: process.env.PG_HOST || "localhost",
//     database: process.env.PG_DB || "",
//     password: process.env.PG_PASSWORD || "",
//     port: process.env.PG_PORT || 5432,
//   };

const pool = new Pool();

module.exports = {
  query: (text, params) => pool.query(text, params),
}  