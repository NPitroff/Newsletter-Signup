// require axios
const axios = require('axios').default;

//define the params for the form
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");



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

// axios post route
axios.post("https://regres.in/api/users", {
  firstName:'Bob',
  lastName:'Hope',
  email:'bob.hope@aol.com'
}
  )
.then(function(response){

  console.log("POST response "+response);
})
.catch(function(error){
  console.log("POST error "+error);
});
