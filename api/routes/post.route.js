const express = require("express");
const postCtl = require("./../controllers/post.controller");
const postRouter = express.Router();

postRouter.get("/", postCtl.index);

module.exports = postRouter;
