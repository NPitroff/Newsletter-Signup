// requre express npm
const express = require("express");
//require https for requests
const https = require("https");
// require body-parser to sort through the data
const bodyParser = require("body-parser");
// translate to app
const app = express();
// use bodyParser
app.use(bodyparser.urlencoded({extended: true}));
