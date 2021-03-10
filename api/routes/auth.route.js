const express = require("express");
const AuthCtl = require("./../controllers/auth.controller");
const authRouter = express.Router();

authRouter
  .post("/login", AuthCtl.login)
  .post("/register", AuthCtl.register)
  .post("/google", AuthCtl.googleAuth)
  .post("/facebook", AuthCtl.facebookAuth);

module.exports = authRouter;
