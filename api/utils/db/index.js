require("./../config/index");

const Pool = require("pg").Pool;

// const conectionString = `postgressql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ec2-3-17-61-173.us-east-2.compute.amazonaws.com:${process.env.DB_PORT}/${process.env.DB_NAME}?ssl=true`;
// const pool = new Pool({
//   connectionString: conectionString,
// });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: false,
  max: 20,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 10000,
  maxUses: 7500,
});
console.log("instance db");
module.exports = pool;
