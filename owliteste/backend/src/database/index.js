import Sequelize from "sequelize";
import mongoose from "mongoose";

import User from "../app/models/User";

import databaseConfig from "../config/database";

const models = [User];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect('mongodb://192.168.99.100:27017/mongoowli', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
