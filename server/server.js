// Since Node.js still doesn't support ES6 imports directly, I use ES5 require way to import modules in the backend. We could include "type: module" in the package.json file to enable experimental ES6 import but, for learning reasons, I choose not to do that in this project.
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8080;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
