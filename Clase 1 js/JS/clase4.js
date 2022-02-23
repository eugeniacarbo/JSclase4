/*let nombre = prompt("Cual es tu nombre?");

function saludo(nombreUsuario) {

    console.log("Holaaa " + nombreUsuario);
};
saludo(nombre);*/

let datos = prompt("Eres mayor de edad?");
while (datos != "salirDeWhile") {
    switch (datos.toUpperCase()) {
        case "Si":
            alert("Bienvenido! Estas a un paso de tus vacaciones");
            datos = prompt("Tenemos cabañas para 4 y 6 personas. Cuantos van a ser?");
            break;
        case "No":
            alert("Lo siento, solo hacemos reservas a mayores de edad.")
            datos = prompt("Esperamos a un mayor.")

    }
}