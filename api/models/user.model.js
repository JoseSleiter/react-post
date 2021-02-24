import Model from "./_model";

class User extends Model {
  /**
   * uid
   * name
   * email
   * password
   * socialGoogleId
   * socialFacebookId
   * */
  contructor() {
    this.table = "users";
    super(this.table);
  }
}
