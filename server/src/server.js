const http = require("http");
const app = require("./app");

const PORT = 8000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `Server up and taking your requests on port: ${PORT}. KA KA KA CHOW!`
  );
});
