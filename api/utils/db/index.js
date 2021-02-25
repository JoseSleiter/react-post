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
  max: 20, // set pool max size to 20
  idleTimeoutMillis: 1000, // close idle clients after 1 second
  connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
  maxUses: 7500, // close (and replace
});

module.exports = pool;
