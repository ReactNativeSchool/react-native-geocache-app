const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

module.exports = app;
