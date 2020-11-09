
  
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); //¡No envíes a tu backend! Use un token de identificación en su lugar.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // Esto es nulo si el alcance 'correo electrónico' no está presente.   
  }

  function init() {
    gapi.load('auth2', function() {
      { client_id : 'CLIENT_ID.apps.googleusercontent.com' } 
      /* Listo. Hacer una llamada a gapi.auth2.init o alguna otra API*/
    });
  }
  
