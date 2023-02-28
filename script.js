alert('¡Bienvenido a mi Curriculum Vitae!');

const miFormulario = document.getElementById("mi-formulario");

miFormulario.addEventListener("submit", function(evento) {
  evento.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, complete todos los campos");
  } else {
    alert("Mensaje enviado correctamente");
    }
});