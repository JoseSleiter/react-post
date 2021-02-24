const express = require("express");
const userCtl = require("./../controllers/user.controller");
const userRouter = express.Router();

userRouter.get("/", userCtl.index);

module.exports = userRouter;
