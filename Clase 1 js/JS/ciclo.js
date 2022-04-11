let nombre = prompt("Holaa, como es tu nombre?");

let edad = parseInt(prompt("Hola " + nombre + " Cuantos años tienes?"));

if (edad < 18) {
    alert("Este sitio solo acepta mayores de edad.");

} else if (edad >= 18 && edad <= 100) {
    alert("Ya estas a un paso de tus Vacaciones!!!");

} else {
    alert("Por favor indicanos tu edad para continuar tu reserva.");
}
