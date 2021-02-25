import Model from "./_model";

class User extends Model {
  contructor() {
    this.table = "users";
    super(this.table);
  }
}

module.exports = new User();
