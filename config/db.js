/*
File name: config/db.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 25, 2022
*/

// Do not expose your credentials in your code.
let atlasDB =
  "mongodb+srv://dbuser:PZO6wjxARk92rkCr@cluster018.so2vhuv.mongodb.net/todo?retryWrites=true&w=majority";

// Database setup
let mongoose = require("mongoose");

module.exports = function () {
  mongoose.connect(atlasDB);
  let mongodb = mongoose.connection;

  mongodb.on("error", console.error.bind(console, "Connection Error:"));
  mongodb.once("open", () => {
    console.log("===> Connected to MongoDB.");
  });

  return mongodb;
};
