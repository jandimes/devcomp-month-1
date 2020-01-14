const express = require("express");
const app = express();

let taxController = require("./controllers/taxController");

app.use("/tax", taxController);

module.exports = app;
