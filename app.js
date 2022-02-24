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
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
// check to see that the var have values
// console.log(firstName, lastName, email);
// data object to send to mailchimp
var data = {
  // hold the information in an array
  members:[
      {
      email_address: emal,
      status: "subscribed",
      merge_fields:{
        FNAME:firstname,
        LNAME:lastName
        }
      }
    ],
  }

  // stringify the data
  var jsonData = JSON.stringify(data);

  var url = "https://us14.api.mailchimp.com/3.0/lists/db11378812";

  const options = {
    method: "POST",
    auth: "nicolai1:afd7113ea4a60697cdd1a1841ed39158-us14"
  }

  https.request(url, options, function(response){

  })
})






// turn on server
app.listen(3000, function(){
  console.log("Running on port 3000")
})
