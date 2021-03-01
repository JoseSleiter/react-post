const Model = require("./_model");

class Post extends Model {
  constructor() {
    super("posts");
    this.fillable = ["id_user", "name", "description"];
  }

  async postByUser(id_user) {
    return await this.hasOne(
      "posts.id, id_user, posts.name, description, created_at",
      "users",
      "id",
      "id_user",
      ` WHERE id_user = ${id_user}`
    );
  }
}
module.exports = new Post();
