
  
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: 501804933970-bi87ubp3nnqe5c0gjbmnv6t4cl3j71nh' + profile.getId()); 
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); 
    var perfil = {
      nombre: profile.getName(),
      correo:  profile.getEmail(),
      foto_perfil: profile.getImageUrl()
    }
    window.localStorage.setItem('profile', JSON.stringify(profile)) 
    window.localStorage.setItem('profile', JSON.stringify(perfil)) 
  }
  
