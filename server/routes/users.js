const express = require("express");
const router = express.Router();
const passport = require("passport");

const { Users } = require("../models");
const { FavMovies } = require("../models");
const { FavTvShows } = require("../models");

router.post("/register", (req, res, next) => {
  Users.create(req.body)
    .then((user) => {
      console.log("USUARIO CREADO");
      return res.status(201).send(user);
    })
    .catch((err) => {
      return res.sendStatus(500);
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (!req.user) {
    console.log("NO HAY USUARIO LOGUEADO");
    return res.sendStatus(401);
  }
  res.send(req.user);
});

router.post("/movies", (req, res) => {
  console.log("CREAMOS FAV...", req.body);
  FavMovies.create(req.body)
    .then((fav) => {
      // console.log("FAVORITO CREADO: ", fav);
      return res.status(201).send(fav);
    })
    .catch((err) => {
      return res.sendStatus(500);
    });
});

router.post("/tv-shows", (req, res) => {
  console.log("CREAMOS FAV...", req.body);
  FavTvShows.create(req.body)
    .then((fav) => {
      // console.log("FAVORITO CREADO: ", fav);
      return res.status(201).send(fav);
    })
    .catch((err) => {
      return res.sendStatus(500);
    });
});

router.get("/", (req, res, next) => {
  Users.findAll()
    .then((users) => {
      console.log("USUARIOS ENCONTRADOS");
      return res.status(200).send(users);
    })
    .catch((err) => {
      console.log(err);
      return res.sendStatus(500);
    });
});

module.exports = router;
