/*
File name: routes/index.router.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 25, 2022
Web App: To-Do List
*/

var express = require("express");
var router = express.Router();
let controlerIndex = require("../controllers/index.controller");

/* GET home page. */
router.get("/", controlerIndex.home);

module.exports = router;
