const express = require("express");
const userCtl = require("./../controllers/user.controller");
const userRouter = express.Router();

userRouter
  .get("/", userCtl.index)
  .get("/", userCtl.email)
  .delete("/", userCtl.delete);

module.exports = userRouter;
