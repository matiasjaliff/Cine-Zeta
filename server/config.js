const dotenv = require("dotenv");

dotenv.config();

const config = {
  // HOST: process.env.HOST || "localhost",
  // SERVER_PORT: process.env.PORT || "8080",
  SERVICE_PATH: process.env.SERVICE_PATH || "",
  API_KEY: process.env.API_KEY || "",
};

module.exports = config;
