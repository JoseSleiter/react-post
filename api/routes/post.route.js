const express = require("express");
const postCtl = require("./../controllers/post.controller");
const postRouter = express.Router();
const authMiddle = require("./../middleware/authJWT");

postRouter
  .get("/", postCtl.index)
  .get("/:id", authMiddle.authenticateToken, postCtl.show)
  .get("/user/:id", authMiddle.authenticateToken, postCtl.userPosts)
  .post("/", authMiddle.authenticateToken, postCtl.store)
  .delete("/:id", authMiddle.authenticateToken, postCtl.delete);

module.exports = postRouter;
