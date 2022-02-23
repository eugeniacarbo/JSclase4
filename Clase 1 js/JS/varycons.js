let cantidad = parseInt(prompt("Por favor, indique cantidad de personas"));
if (cantidad < 2) {
    alert("No hay descuento");
} else if (cantidad > 1 && cantidad < 3) {
    alert("Tiene un descuento del 10%");
} else if (cantidad > 3 && cantidad < 5) {
    alert("Tiene un descuento del 15%");
} else if (cantidad === 5 || cantidad === 6) {
    alert("Tiene un descuento del 20%");
} else {
    alert("Supera nuestra capacidad");
}