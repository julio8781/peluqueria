// Alerta cuando se clickea en el botón de reservar
document.getElementById("reservarBtn").addEventListener("click", function() {
    alert("¡Gracias por tu interés! Nos pondremos en contacto pronto.");
});

// Validación básica del formulario de contacto
document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
        alert("¡Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto pronto.");
        document.getElementById("formContacto").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});