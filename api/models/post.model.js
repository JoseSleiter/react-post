const Model = require("./_model");

class Post extends Model {
  constructor() {
    super("posts");
    this.fillable = ["id_user", "name", "description"];
  }
}
module.exports = new Post();
