const express = require("express");
const router = express.Router();

const { Users } = require("../models");

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

router.post("/", (req, res, next) => {
  Users.create(req.body)
    .then((user) => {
      // console.log("USUARIO CREADO");
      return res.status(201).send(user);
    })
    .catch((err) => {
      // console.log("ERROR: ", err);
      return res.sendStatus(500);
    });
})

module.exports = router;