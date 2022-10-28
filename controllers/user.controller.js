/*
File name: controllers/user.controller.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 25, 2022
Web App: To-Do List
*/

let User = require("../models/user.model");
let passport = require("passport");
const getErrorMessage = require("../helpers/getErrorMessage");

module.exports.renderSignin = function (req, res, next) {
  if (!req.user) {
    res.render("auth/signin", {
      title: "Sign-in Form",
      messages: req.flash("error") || req.flash("info"),
    });
  } else {
    console.log(req.user);
    return res.redirect("/");
  }
};

module.exports.renderSignup = function (req, res, next) {
  if (!req.user) {
    // creates a empty new user object.
    let newUser = User();

    res.render("auth/signup", {
      title: "Sign-up Form",
      messages: req.flash("error"),
      user: newUser,
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.signup = function (req, res, next) {
  if (!req.user && req.body.password === req.body.password_confirm) {
    console.log(req.body);

    let user = new User(req.body);
    user.provider = "local";
    console.log(user);

    user.save((err) => {
      if (err) {
        let message = getErrorMessage(err);

        req.flash("error", message);
        return res.render("auth/signup", {
          title: "Sign-up Form",
          messages: req.flash("error"),
          user: user,
        });
      }
      req.login(user, (err) => {
        if (err) return next(err);
        return res.redirect("/");
      });
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.signout = function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

module.exports.signin = function (req, res, next) {
  passport.authenticate("local", {
    successRedirect: req.session.url || "/",
    failureRedirect: "/users/signin",
    failureFlash: true,
  })(req, res, next);
  delete req.session.url;
};
