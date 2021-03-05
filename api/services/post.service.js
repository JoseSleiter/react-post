const post = require("./../models/post.model");

class PostService {
  async index() {
    try {
      const resp = await post.select("id, title, description");
      return resp.rows;
    } catch (err) {
      throw new Error(err.stack);
    }
  }

  async showById(id) {
    try {
      const resp = await post.select("title, description", `where id = ${id}`);
      return resp.rows;
    } catch (err) {
      throw new Error(err.stack);
    }
  }

  async showByUser(id) {
    try {
      const resp = await post.select(
        "title, description",
        `where id_user = ${id}`
      );
      return resp.rows;
    } catch (err) {
      throw new Error(err.stack);
    }
  }

  async innerWithUsers(id) {
    try {
      const resp = await post.postByUser(id);
      return resp.rows;
    } catch (err) {
      throw new Error(err.stack);
    }
  }

  async store(data) {
    try {
      const resp = await post.insert(data);
      return resp.rows;
    } catch (err) {
      throw new Error(err.stack);
    }
  }

  async deleteById(id) {
    try {
      const resp = await post.delete(`id = ${id}`);
      return resp.rows;
    } catch (err) {
      throw new Error(err.stack);
    }
  }
}

module.exports = new PostService();
