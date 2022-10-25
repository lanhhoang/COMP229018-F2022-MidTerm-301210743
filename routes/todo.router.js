/*
File name: routes/todo.router.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 25, 2022
*/

var express = require("express");
var router = express.Router();

let todoController = require("../controllers/todo.controller");

// Helper function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  // ADD YOUR CODE HERE
}

/* GET list of items */
router.get("/list", todoController.todoList);

// Route for Details
router.get("/details/:id", todoController.details);

// Routers for edit
router.get("/edit/:id", todoController.displayEditPage);
router.post("/edit/:id", todoController.processEditPage);

// Delete
router.get("/delete/:id", todoController.performDelete);

/* GET Route for displaying the Add page - CREATE Operation */
router.get("/add", todoController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post("/add", todoController.processAddPage);

module.exports = router;
