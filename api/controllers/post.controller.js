const postService = require("./../services/post.service");
class Post {
  async index(req, res, next) {
    try {
      const resp = await postService.index();
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(200).json({ data: e.stack });
    }
  }

  /**
   *
   * @param {*} req object with id user
   * @param {*} res
   * @param {*} next
   */
  async show(req, res, next) {
    try {
      const { id } = req.params;
      const resp = await postService.showById(id);
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(200).json({ data: e.stack });
    }
  }

  async store(req, res, next) {
    try {
      const data = req.body;
      data.description = escape(data.description);
      const resp = await postService.store(data);
      res.status(201).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(200).json({ data: e.stack });
    }
  }

  async update(req, res, next) {
    try {
      const data = req.body;
      const resp = await postService.update(data);
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(200).json({ data: e.stack });
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const resp = await postService.deleteById(id);
      res.status(200).json({ data: resp });
    } catch (e) {
      console.log(e);
      res.status(200).json({ data: e.stack });
    }
  }
}
module.exports = new Post();
