import http from "node:http";

const PORT = 3000;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:" + PORT);
});
