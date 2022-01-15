const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app)
let serve_static = express.static(__dirname + "/static");

app.use("/static", serve_static);

app.get("/", function(req, resp){
  resp.sendFile(__dirname + "/index.html");
});

let port = process.env.PORT || 3000;
server.listen(port);
