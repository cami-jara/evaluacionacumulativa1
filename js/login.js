const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('button',function(event){
  event.preventDefault();
  let users = Array(
      {
        usuario: usarname.value,
        contraseña: password.value
      }
  );
   localStorage.setItem('user',JSON.stringify(users));
   location.href='page.html';
});