class Auth {
  async login(req, res, next) {
    try {
      res.json({ data: "loginSuccessful" });
    } catch (e) {
      console.log(e);
    }
  }
  async register(req, res, next) {
    try {
      res.json({ data: "loginSuccessful" });
    } catch (e) {
      console.log(e);
    }
  }
  async googleAuth(req, res, next) {
    try {
      res.json({ data: "loginSuccessful" });
    } catch (e) {
      console.log(e);
    }
  }
  async facebookAuth(req, res, next) {
    try {
      res.json({ data: "loginSuccessful" });
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = new Auth();
