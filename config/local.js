/*
File name: config/local.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 25, 2022
Web App: To-Do List
*/

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.model");

module.exports = function () {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (!user) {
          return done(null, false, {
            message: "Unknown user",
          });
        }

        if (!user.authenticate(password)) {
          return done(null, false, {
            message: "Invalid password",
          });
        }

        return done(null, user);
      });
    })
  );
};
