"use strict";
require("./utils/config/index");
const express = require("express");
const app = express();

// CoreMidleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
const initRoutes = require("./routes/api-version");
initRoutes(app);

// Middleware Error

app.listen(process.env.PORT, () => {
  console.log(`run server in: ${process.env.PORT}`);
});
