const path = require("path");

function getMP3(req, res) {
  console.log("Heard you");
  console.log(req.params.requestedAudio);
  const filePath = path.join(
    __dirname,
    "../",
    "../",
    "../",
    "media",
    "audio",
    req.params.requestedAudio
  );
  console.log(filePath);
  res.sendFile(filePath);
}

function test(req, res) {
  res.send("Hello");
}

module.exports = {
  getMP3,
  test,
};
