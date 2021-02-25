import Model from "./_model";

class Post extends Model {
  contructor() {
    this.table = "posts";
    super(this.table);
  }
}
module.exports = new Post();
