// const authMiddle =
const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const postRouter = require("./post.route");

function initRoutes(app) {
  app.use(
    "/api/v1/auth",
    //   ,
    authRouter
  );
  app.use(
    "/api/v1/user",
    // authMiddle.authenticateToken,
    userRouter
  );
  app.use(
    "/api/v1/post",
    // authMiddle.authenticateToken,
    postRouter
  );
}
module.exports = initRoutes;
