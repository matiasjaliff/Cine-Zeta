const Sequelize = require("sequelize");

const db = require("../db");

class FavMovie extends Sequelize.Model {}

FavMovie.init(
  {},
  {
    sequelize: db,
    modelName: "favorite_movie",
    timestamps: false,
  }
);

module.exports = FavMovie;
