const express = require("express");
const app = express();

const url = `http://api.serpstack.com/search?access_key=${API_KEY}&query=${query}`;

// index route
app.get("/", (req, res) => {
  res.send("Welcome to our search engine!");
});

app.get(url, (req, res) => {
  res.send("Welcome to our search engine!");
});

module.exports = app;
