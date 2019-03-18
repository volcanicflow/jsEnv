"use strict";

var fs = require("fs");
fs.createReadStream(".dev-env").pipe(fs.createWriteStream(".env"));
