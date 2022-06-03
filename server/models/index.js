const Users = require("./user-model");
const FavMovies = require("./fav-movie-model");
const FavTvShows = require("./fav-tv-show-model");
const TmdbMovies = require("./tmdb-movie-model");
const TmdbTvShows = require("./tmdb-tv-show-model");

Users.hasMany(FavMovies);
FavMovies.belongsTo(Users);

Users.hasMany(FavTvShows);
FavTvShows.belongsTo(Users);

// TmdbMovies.hasMany(FavMovies);
// FavMovies.belongsTo(TmdbMovies);

module.exports = { Users, FavMovies, FavTvShows, TmdbMovies, TmdbTvShows };
