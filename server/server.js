// Since Node.js still doesn't support ES6 imports directly, I use ES5 require way to import modules in the backend. We could include "type: module" in the package.json file to enable experimental ES6 import but, for learning reasons, I choose not to do that in this project.
const config = require("./config");
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const app = express();
const db = require("./db");
const models = require("./models");
const router = require("./routes");
const usersSeed = require("./db/usersSeed");
const User = require("./models/user-model");
const sessions = require("express-session");

const port = 8080;

app.use(morgan("tiny"));

app.use(express.json());

app.use(cookieParser());

app.use(
  sessions({
    secret: "tmdb",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            // email not found
            return done(null, false);
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); // wrong password
            }
            return done(null, user); // success :D
          });
        })
        .catch(done); // done(err)
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/api", router);

db.sync(/* { force: true } */)
  // .then(() => models.Users.bulkCreate(usersSeed))
  .then(() =>
    app.listen(port, () => console.log(`App listening on port ${port}`))
  );
