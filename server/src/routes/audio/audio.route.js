const express = require("express");
const audioRouter = express.Router();
const { getMP3, test } = require("./audio.controller");

audioRouter.get("/mp3/:requestedAudio", getMP3);
audioRouter.get("/test", test);

module.exports = audioRouter;
