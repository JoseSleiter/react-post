const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      data: {
        user,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRESIN }
  );
};
module.exports = { generateAccessToken };
