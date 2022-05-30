const dotenv = require("dotenv");

dotenv.config();

const config = {
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || "8080",
  API_KEY: process.env.API_KEY || "",
};

module.exports = config;
