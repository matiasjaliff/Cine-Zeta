const axios = require("axios");
const express = require("express");
const { SERVICE_PATH, API_KEY } = require("../config");
const router = express.Router();

router.get("/in-theaters", (req, res, next) => {
  axios
    .get(
      `${SERVICE_PATH}/discover/movie?api_key=${API_KEY}&region=AR&page=1&primary_release_date.gte=2022-05-01&primary_release_date.lte=2022-06-01&sort_by=popularity.desc`
    )
    .then((response) => res.status(200).send(response.data))
    .catch((err) => console.log("Error: ", err.code));
});

router.get("/on-tv", (req, res, next) => {
  axios
    .get(
      `${SERVICE_PATH}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&page=1`
    )
    .then((response) => res.status(200).send(response.data))
    .catch((err) => console.log("Error: ", err.code));
});

router.get("/search/:type", (req, res, next) => {
  const type = req.params.type;
  console.log("TYPE: ", type);
  const query = req.query.query;
  console.log("QUERY: ", query);
  axios
    .get(
      `${SERVICE_PATH}/search/${type}?api_key=${API_KEY}&query=${query}&sort_by=popularity.desc&page=1`
    )
    .then((response) => {
      // console.log("HUBO RESPUESTA...", response.data);
      res.status(200).send(response.data);
    })
    .catch((err) => console.log("Error: ", err.code));
});

router.get("/:type/:id", (req, res, next) => {
  const type = req.params.type;
  console.log("TYPE: ", type);
  const id = req.params.id;
  console.log("ID: ", id);
  axios
    .get(`${SERVICE_PATH}/${type}/${id}?api_key=${API_KEY}`)
    .then((response) => {
      // console.log("HUBO RESPUESTA...", response.data);
      res.status(200).send(response.data);
    })
    .catch((err) => console.log("Error: ", err.code));
});

module.exports = router;
