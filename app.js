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
// use dotenv
require("dotenv").config();


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
      email_address: email,
      status: "subscribed",
      merge_fields:{
        FNAME:firstName,
        LNAME:lastName
        }
      }
    ],
  }

  // stringify the data
  var jsonData = JSON.stringify(data);

  var url = "https://us14.api.mailchimp.com/3.0/lists/db11378812";
  var apiKey = process.env.API_KEY;
  var name = process.env.NAME;

  const options = {
    method: "POST",
    auth: name+":"+apiKey
  }

  const request = https.request(url, options, function(response){
    response.on("data", function(data){
      const jsonData = JSON.parse(data);
      console.log(jsonData);
      // response for success
      console.log("status code is "+response.statusCode)
      if(response.statusCode != 200){
        res.sendFile(__dirname + "/failure.html")
      } else {
        res.sendFile(__dirname + "/success.html")
      }
    })
  })
  // call the POST request
  request.write(jsonData);
  request.end();

})

// post route for failure
app.post("/failure", function(req, res){
  res.sendFile(__dirname + "/signup.html");
})





// turn on server either on heroku or locally
app.listen(process.env.PORT || 3000, function(){
  console.log("Running on port 3000")
})
