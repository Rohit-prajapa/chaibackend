require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/google", (req, res) => {
  res.send("www.google.com");
});

app.get("/login", (req, res) => {
  res.send("login successfully");
});

app.get("/chai", (req, res) => {
  res.send("<h1>Chai Aur Code </h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
