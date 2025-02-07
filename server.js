const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/cats", (req, res) => {
  res.render("cats");
});

app.get("/dogs", (req, res) => {
  res.render("dogs");
});

app.get("/birds", (req, res) => {
  res.render("birds");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log("listening on port:", port);
});
