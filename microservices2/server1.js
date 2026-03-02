const http = require("http");
const fs   = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const file = path.join(__dirname, "index1.html");
  fs.readFile(file, "utf8", (err, html) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(html);
  });
});

server.listen(3002, () => {
  console.log("Service 2 → http://localhost:3002");
});