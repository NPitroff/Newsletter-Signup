// requre express npm
const express = require("express");
// require express-formidable
const formidable = require('express-formidable');
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

// axios get request
axios.get('https://regres.in/api/users')
  .then(function(response) {
    // handle for success
    console.log(response);
  })
  .catch(function(error){
    // handle error
    console.log(error)
  });

// post route
axios.post('https://regres.in/api/users', {
  name:'Bob Hope',
  })
.then(function(response){
  console.log("POST response "+response);
})
.catch(function(error){
  console.log("POST error "+error);
});








// turn on server
app.listen(3000, function(){
  console.log("Running on port 3000")
})
