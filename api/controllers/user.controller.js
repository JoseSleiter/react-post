class User {
  async index(req, res, next) {
    try {
      res.json({ data: "loginSuccessful" });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new User();
