const express = require("express");
const app = express();

// index route
app.get("/", (req, res) => {
  res.send("Welcome to our search engine!");
});

module.exports = app;
