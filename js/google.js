{ 
    client_id : '501804933970-spga90hlajn24tb33fkhng4nrg1p4dg9.apps.googleusercontent.com' } 
    
    
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
     
    function init() {
        gapi.load('auth2', function() {
          /* Ready. Make a call to gapi.auth2.init or some other API */
        });
      }
  }