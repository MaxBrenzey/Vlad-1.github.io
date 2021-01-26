const text = document.querySelector('#text')
// const inpmesseg = document.querySelector('#msg')
// let myvalue = `${inpmesseg} and ${text}`

function sendEmail() {
  var tempParams = {
    from_name: document.querySelector('#fromName').value,
    to_name: document.querySelector('#toName').value,
    message: document.querySelector('#msg').value,
    // message: `document.querySelector('#text')`
    // text: document.querySelector('#meText').value
  };
  emailjs.send('service_ulec8ob', 'template_yoov988', tempParams)
    .then(function(res) {
      console.log('sucsess', res.status);
      console.log(tempParams)
    })
}

// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })


var scroll = new SmoothScroll('a[href*="#welcome"]');