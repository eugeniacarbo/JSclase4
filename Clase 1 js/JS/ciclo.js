/*let numeroDeReserva = preseInt(prompt("Ingrese cantidad de noches para su reserva"));
let disponibilidad = 45;
let diasReservados = 0;
let cantidadDePersonas = "";

for (let i = 0; i < numeroDeReserva; i++) {
    cantidadDePersonas = prompt("Cuantas personas son?(Dos o Cuatro)");
    diasReservados = parseInt(prompt("Cuantas noches queres reservar?"))

    if (cantidadDePersonas.toUpperCase() === "Dos") {
        disponibilidad = disponibilidad - diasReservados;
    } else if (cantidadDePersonas.toUpperCase() === "Cuatro" && disponibilidad > diasReservados) {
        disponibilidad = disponibilidad - diasReservados;
    } else {
        alert("No hay dias disponibles");
    }

}
alert(`La reserva fue generada con exito. Tenemos ${disponibilidad} noches mas para vos`);*/