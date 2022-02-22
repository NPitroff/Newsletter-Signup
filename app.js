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
app.post('/',(req, res) =>{
  console.log(JSON.stringify(req.fields));
});





// defining an axios request
window.addEventListener('load', () =>{
  // define the form as a target
  const form = document.querySelector('form');
  // add event listener to the form
  form.addEventListener('submit', (e) =>{
    // prevent page reload after button click
    e.preventDefault();
    // create the form object
    let data = new FormData(form);
    // axios request
    axios({
      method: 'post',
      url: '/'
      data: data,
    })
    .then((res) =>{
      console.log(res)
    })
    // if there is an error
    .catch((err) =>{throw err});
  });
});

// turn on server
app.listen(3000, function(){
  console.log("Running on port 3000")
})
