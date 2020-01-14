const express = require("express");
const app = express();
const taxController = require("./controllers/taxController");

app.use("/tax", taxController);

module.exports = app;
