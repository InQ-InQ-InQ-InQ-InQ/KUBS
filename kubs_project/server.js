const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.listen(8080, function () {
  console.log("listening on 8080");
});

app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "/build/index.html"));
});

app.post("/api/login", function (request, response) {
  console.log(request.body);
  response.send(request.body);
});

app.post("/api/members", function (request, response) {
  console.log(request.body);
  response.send(request.body);
});

app.post("/api/find", function (request, response) {
  console.log(request.body);
  response.send(request.body);
});
