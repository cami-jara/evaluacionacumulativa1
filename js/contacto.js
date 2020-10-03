("#enviar-btn").click(function(){
    let nombre = $('#nombre-txt').val();
    let apellido = $('#apellido-txt').val();
    let correo = $('#correo-txt').val();
    let telefono = $('#telefono-txt').val();
    let mensaje = $('#mensaje-txt').val();
  
  
    if(nombre == '' || apellido == '' || correo == '' || telefono == '' || mensaje == ''){
  
      Swal.fire({
    title: 'Error',
    text: 'Completa el formuralio',
    icon: 'error',
    confirmButtonText: 'Ok',
      });
    }else{
      Swal.fire({
    title: 'Gracias!',
    text: 'Tú mensaje a sido enviado exitosamente',
    icon: 'success',
    confirmButtonText: 'Ok',
    });
  }

});  