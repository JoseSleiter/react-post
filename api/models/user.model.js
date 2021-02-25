const Model = require("./_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class User extends Model {
  constructor() {
    super("users");
    this.fillable = [
      "name",
      "email",
      "password",
      "social_google_id",
      "social_facebook_id",
    ];
  }

  async hashPassword(password) {
    let saltRounds = 10;
    return (password = await bcrypt.hash(password, saltRounds));
  }

  async verifyPassword(password, dbPassword) {
    return await bcrypt.compare(password, dbPassword);
  }
}

module.exports = new User();
