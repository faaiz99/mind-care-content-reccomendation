const http = require("http");
const app = require("./src/app.js");
const port = process.env.PORT;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`mind-care-content-reccomendation: http://localhost:${port}/api/`);
});