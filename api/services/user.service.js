const user = require("./../models/user.model");
const post = require("./../models/post.model");

class UserService {
  async showById(idUser) {
    try {
      let columns = user.fillable.join();
      const data = await user.select(`${columns}`, `where id_user = ${idUser}`);
      return data.rows;
    } catch (err) {
      throw new Error(err.stack);
    }
  }

  async userByEmail(email, password) {
    try {
      let columns = user.fillable.join();
      const data = await user.select(
        ` id,${columns}`,
        `where email = '${email}' `
      );
      const verifyClient = await user.verifyPassword(
        password,
        data.rows[0].password
      );
      if (!verifyClient) return {};
      return data.rows;
    } catch (err) {
      throw new Error(err.stack);
    }
  }

  async store(data) {
    try {
      data.password = await user.hashPassword(data.password);
      const resp = await user.insert(data);
      return resp.rows;
    } catch (err) {
      throw new Error(err.stack);
    }
  }

  async deleteById(id) {
    try {
      const resp = await user.delete(`where id = ${id}`);
      return resp.rows;
    } catch (err) {
      throw new Error(err.stack);
    }
  }
}

module.exports = new UserService();
