const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

const db = require("../db");

class User extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

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
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
      // allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "user",
    updatedAt: false,
  }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(10)
    .then((salt) => {
      user.salt = salt;
      console.log("SALT: ", user.salt);
      return user.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
      console.log("HASH: ", user.password);
    });
});

module.exports = User;
