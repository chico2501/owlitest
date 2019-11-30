import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: Sequelize.STRING,
        address: Sequelize.STRING,
        email: Sequelize.STRING,
        cellphone: Sequelize.STRING,
        password: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default User;
