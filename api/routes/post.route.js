const express = require("express");
const postCtl = require("./../controllers/post.controller");
const postRouter = express.Router();

postRouter
  .get("/", postCtl.index)
  .get("/:id", postCtl.show)
  .post("/", postCtl.store)
  .delete("/:id", postCtl.delete);

module.exports = postRouter;
