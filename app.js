// requre express npm
const express = require("express");
//require https for requests
const https = require("https");
// require axios
const axios = require('axios').default;
// require body-parser to sort through the data
const bodyParser = require("body-parser");
// translate to app
const app = express();
// use bodyParser
app.use(bodyParser.urlencoded({extended: true}));
// use jsdom to mock a window for jquery
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

// script to use the css and images on the website
app.use(express.static("public"));

// Test webpage to make sure it is linked
app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})

// post route
app.post("/", function(req, res){
  console.log(req.body);
})

// turn on server
app.listen(3000, function(){
  console.log("Running on port 3000")
})
