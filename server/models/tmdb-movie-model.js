const Sequelize = require("sequelize");

const db = require("../db");

class TmdbMovie extends Sequelize.Model {}

TmdbMovie.init(
  {
    tmdbId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "tmdb_movie",
    timestamps: false,
  }
);

module.exports = TmdbMovie;
