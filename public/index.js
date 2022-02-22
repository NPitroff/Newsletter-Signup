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
      url: '/',
      data: data,
    })
    .then((res) =>{
      console.log(res)
    })
    // if there is an error
    .catch((err) =>{throw err});
  });
});
