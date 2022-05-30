// Since Node.js still doesn't support ES6 imports directly, I use ES5 require way to import modules in the backend. We could include "type: module" in the package.json file to enable experimental ES6 import but, for learning reasons, I choose not to do that in this project.
const config = require("./config");
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./db");
const models = require("./models");
const router = require("./routes");
const usersSeed = require("./db/usersSeed");

const port = 8080;

app.use(morgan("tiny"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use("/api", router);

db.sync({ force: true })
  .then(() => models.Users.bulkCreate(usersSeed))
  .then(() =>
    app.listen(port, () =>
      console.log(`App listening on port ${port}`)
    )
  );
