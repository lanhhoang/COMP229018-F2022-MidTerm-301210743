/*
File name: config/passport.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 25, 2022
Web App: To-Do List
*/

const passport = require("passport");

module.exports = function () {
  const User = require("../models/user.model");

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne(
      {
        _id: id,
      },
      "-password -salt",
      (err, user) => {
        done(err, user);
      }
    );
  });

  require("./local")();
};
