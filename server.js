"use strict";
//unused file, may switch to dev middleware and express. Currently interested in exploring nest.js
/*
var fs = require("fs");
fs.createReadStream(".dev-env").pipe(fs.createWriteStream(".env"));

const express = require("express");
const path = require("path");

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config.js");

const compiler = webpack(config);

const app = express();
//static assets
app.use(express.static("public"));
//setup middleware required to run HMR
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);
app.use(webpackHotMiddleware(compiler));
//
// app.get("/", (req, res) =>
//   res.sendFile(path.resolve(__dirname, "./dist/index.html"))
// );

app.listen(3000, () => console.log("app listening"));
*/
