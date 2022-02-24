// npm packages
const express = require("express");
//require https for requests
const https = require("https");
// require body-parser to sort through the data
const bodyParser = require("body-parser");
// require request
const request = require("request");
// translate to app
const app = express();


// use bodyParser
app.use(bodyParser.urlencoded({extended: true}));


// script to use the css and images on the website
app.use(express.static("public"));

// Test webpage to make sure it is linked
app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req, res){
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
})










// turn on server
app.listen(3000, function(){
  console.log("Running on port 3000")
})
