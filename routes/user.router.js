/*
File name: routes/user.router.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 25, 2022
Web App: To-Do List
*/

let express = require("express");
let router = express.Router();
let usersController = require("../controllers/user.controller");
let passport = require("passport");

// Routes for sign-up
router.get("/signup", usersController.renderSignup);
router.post("/signup", usersController.signup);

// Routes for sign-in
router.get("/signin", usersController.renderSignin);
router.post("/signin", usersController.signin);

// Route for sign-out
router.get("/signout", usersController.signout);

module.exports = router;
