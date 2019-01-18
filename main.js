document.addEventListener('DOMContentLoaded',function (){
  const form = document.querySelectorAll(" .form")[0];
  form.addEventListener("submit",function(event) {
    event.preventDefault();
    const nombre = document.querySelectorAll(".nombre")[0].value;
    const mensaje = `¡Bienvenido ${nombre}!` ;
    const mensajeTexto = document.querySelectorAll(".mensaje-bienvenida")[0];

  mensajeTexto.innerHTML = mensaje;

  });

});
