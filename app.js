const express = require("express");
const app = express();

const google = [
  {
    id: 1,
    title: "Cake Recipes",
    snippet:
      "Cupcakes, birthday cakes, chocolate cakes and brownies- bake up something for every occasion.",
    url: "https://www.bbcgoodfood.com/recipes/category/all-cakes-baking",
  },
  {
    id: 2,
    tile: "Oscars",
    snippet:
      "Official site of the Academy with history and general information on the Academy Awards.",
    url: "https://www.oscars.org",
  },
  {
    id: 3,
    title: "Beyonce",
    snippet: "The Official Website of Beyoncé.",
    url: "https://www.beyonce.com/",
  },
  {
    id: 4,
    title: "Alec Baldwin",
    snippet:
      "Alec Baldwin, 63, and wife Hilaria, 38, reveal they're expecting a 'surprise' SEVENTH child together, five months after fatal Rust shooting",
    url: "https://www.dailymail.co.uk/tvshowbiz/article-10665127/Hilaria-Baldwin-expecting-SEVENTH-child-Alec-Baldwin.html",
  },
  {
    id: 5,
    title: "Rihanna",
    snippet: "The latest Tweets from Rihanna (@rihanna)",
    url: "https://twitter.com/rihanna",
  },
];
JSON.stringify(google);

// index route
app.get("/", (req, res) => {
  res.send("Welcome to our search engine!");
});

app.get("/searches", (req, res) => {
  try {
    res.status(200);
    res.send(google);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Request not received");
  }
});

app.get("/searches/:id", (req, res) => {
  try {
    res.status(200);
    const searchId = req.params.id - 1;
    const selectedSearch = google[searchId];
    res.send(selectedSearch);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Request not received");
  }
});

app.get("/rand-page", (req, res) => {
  try {
    res.status(200);
    res.send(randomWebPages());
  } catch (err) {
    console.error(err);
  } finally {
    console.log("Request not received");
  }
});

// function for retrieving random webpages from array
function randomWebPages() {
  const randNum = Math.floor(Math.random() * google.length);
  return randomWebPages[randNum];
}

module.exports = app;
