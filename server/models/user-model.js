const Sequelize = require("sequelize");

const db = require("../db");

class User extends Sequelize.Model {}

User.init(
  {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // dateOfBirth: {},
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // country: {},
  },
  {
    sequelize: db,
    modelName: "user",
    updatedAt: false,
  }
);

module.exports = User;