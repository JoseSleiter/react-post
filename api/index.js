"use strict";
require("./utils/config/index");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.listen(process.env.PORT, () => {
  console.log(`run server in: ${process.env.PORT}`);
});
