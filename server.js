const express = require("express");
const path = require("path");
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "fallout.fm");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(`${__dirname}/dist/${nomeApp}`));

app.get("/*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/${nomeApp}/index.html`));
});

app.listen(process.env.PORT || 8080);
