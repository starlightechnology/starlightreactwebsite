const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "0.0.0.0";
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, "build", req.url === "/" ? "index.html" : req.url);
  let extname = path.extname(filePath);

  // Set the content type
  let contentType = "text/html";
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    default:
      contentType = "text/html";
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404: Page Not Found</h1>", "utf-8");
      } else {
        res.writeHead(500);
        res.end(`Server error: ${error.code}`, "utf-8");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
