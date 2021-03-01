const express = require("express");
const AuthCtl = require("./../controllers/auth.controller");
const authRouter = express.Router();
const authMiddle = require("./../middleware/authJWT");

authRouter
  .post("/login", AuthCtl.login)
  .post("/register", AuthCtl.register)
  .post("/google", AuthCtl.googleAuth)
  .post("/facebook", AuthCtl.facebookAuth)
  .get("/autoLogin", authMiddle.authenticateToken, AuthCtl.autoLogin);

module.exports = authRouter;
