const axios = require("axios");
const express = require("express");
const { SERVICE_PATH, API_KEY } = require("../config");
const router = express.Router();

router.get("/in-theaters", (req, res, next) => {
  axios
    .get(`${SERVICE_PATH}/discover/movie?api_key=${API_KEY}&page=1&primary_release_date.gte=2022-05-01&primary_release_date.lte=2022-06-01&sort_by=popularity.desc`)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => console.log("Error: ", err.code));
});

module.exports = router;
