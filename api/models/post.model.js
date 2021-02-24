import Model from "./_model";

class Post extends Model {
  /**
   * uid
   * user_id
   * name
   * description
   * created_at
   * updated_at
   * */
  contructor() {
    this.table = "posts";
    super(this.table);
  }
}
