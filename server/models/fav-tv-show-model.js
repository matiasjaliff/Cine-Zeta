const Sequelize = require("sequelize");

const db = require("../db");

class FavTvShows extends Sequelize.Model {}

FavTvShows.init(
  {
    tmdbTvShowId: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: "favorite_tv_show",
    timestamps: false,
  }
);

module.exports = FavTvShows;
