const authService = require("./../services/social.service");
const userService = require("./../services/user.service");
const utilJWT = require("./../utils/jwt/generateJWT");

class Auth {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        res.status(422).json({ success: false, data: "correo no registrado" });
      }

      const client = await userService.userByEmail(email, password);
      if (!client.length) {
        return res
          .status(422)
          .json({ success: false, data: "invalidate password or email" });
      }

      res.status(200).json({
        success: true,
        data: {
          token: utilJWT.generateAccessToken(client[0]),
          user: client[0],
        },
        message: "login Successful",
      });
    } catch (e) {
      res.status(200).json({ success: false, data: e.stack });
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

  async autoLogin(req, res, next) {
    try {
      const { data } = req.user;
      const { email, password } = data.user;

      const client = await userService.userByEmail(email, password);
      if (!client.length) {
        return res
          .status(422)
          .json({ success: false, data: "invalidate password or email" });
      }

      res.status(200).json({
        success: true,
        data: {
          token: utilJWT.generateAccessToken(client[0]),
          user: client[0],
        },
        message: "autologin Successful",
      });
    } catch (e) {
      res.status(200).json({ success: false, data: e.stack });
    }
  }
}
module.exports = new Auth();
