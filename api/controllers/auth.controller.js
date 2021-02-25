const authService = require("./../services/social.service");
const userService = require("./../services/user.service");
const utilJWT = require("./../utils/jwt/generateJWT");

class Auth {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        res.status(422).json({ data: "correo no registrado" });
      }

      const client = await userService.userByEmail(email, password);
      if (!client) {
        res.status(404).json({ data: "invalidate password or email" });
      }

      res.status(200).json({
        success: true,
        data: {
          token: utilJWT.generateAccessToken(client),
          client: client[0].id,
        },
        message: "login Successful",
      });
    } catch (e) {
      res.status(200).json({ data: e.stack });
    }
  }

  async register(req, res, next) {
    try {
      const data = req.body;
      const resp = await userService.store(data);
      res.status(200).json({ data: resp });
    } catch (e) {
      res.status(200).json({ data: e.stack });
    }
  }

  async googleAuth(req, res, next) {
    try {
      const data = req.body;
      const resp = await userService.store(data);
      res.status(200).json({ data: resp });
    } catch (e) {
      res.status(200).json({ data: e.stack });
    }
  }

  async facebookAuth(req, res, next) {
    try {
      const data = req.body;
      const resp = await userService.store(data);
      res.status(200).json({ data: resp });
    } catch (e) {
      res.status(200).json({ data: e.stack });
    }
  }
}
module.exports = new Auth();
