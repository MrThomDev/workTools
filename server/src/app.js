const express = require("express");
const app = express();
const audioRouter = require("./routes/audio/audio.route");
const path = require("path");

app.use(express.json());

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));
app.use("/audio", audioRouter);

module.exports = app;
