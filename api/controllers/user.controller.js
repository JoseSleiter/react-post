const userService = require("./../services/user.service");
class User {
  async index(req, res, next) {
    try {
      res.json({ data: "loginSuccessful" });
    } catch (e) {
      console.log(e);
    }
  }

  async show(req, res, next) {
    try {
      const { id } = req.params;
      const resp = await userService.showById(id);
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(200).json({ data: e.stack });
    }
  }

  async email(req, res, next) {
    try {
      const { email } = req.params;
      const resp = await userService.userByEmail(email);
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(200).json({ data: e.stack });
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const resp = await userService.deleteById(id);
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(200).json({ data: e.stack });
    }
  }
}

module.exports = new User();
