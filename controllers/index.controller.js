/*
File name: controllers/index.controller.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 25, 2022
*/

exports.home = function (req, res, next) {
  console.log("===> Original URL: " + req.session.url);
  res.render("index", {
    title: "Home",
    userName: req.user ? req.user.username : "",
  });
};
