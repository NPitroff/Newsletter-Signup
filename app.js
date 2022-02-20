// requre express npm
const express = require("express");
//require https for requests
const https = require("https");
// require body-parser to sort through the data
const bodyParser = require("body-parser");
// translate to app
const app = express();
// use bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// Test webpage to make sure it is linked
app.get("/", function(req, res){
  res.send("<h1>Hello World!</h1>");
})



// turn on server
app.listen(3000, function(){
  console.log("Running on port 3000")
})
