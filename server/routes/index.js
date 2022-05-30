const express = require("express");
const router = express.Router();

const tmdbRouter = require("./tmdb-service");
const usersRouter = require("./users");

router.use("/tmdb", tmdbRouter);
router.use("/users", usersRouter);

module.exports = router;
