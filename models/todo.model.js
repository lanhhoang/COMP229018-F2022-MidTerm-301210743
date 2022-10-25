/*
File name: models/todo.model.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 25, 2022
*/

// Import
let mongoose = require("mongoose");

// Create a model class
let todoModel = mongoose.Schema(
  {
    task: String,
    description: String,
    complete: { type: Boolean, default: false },
  },
  {
    collection: "todo",
  }
);

module.exports = mongoose.model("Todo", todoModel);
