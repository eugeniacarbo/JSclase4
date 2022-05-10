let nombre = prompt("Holaa, como es tu nombre?");

let edad = parseInt(prompt("Hola " + nombre + " Cuantos años tienes?"));

if (edad < 18) {
    alert("Este sitio solo acepta mayores de edad.");

} else if (edad >= 18 && edad <= 100) {
    alert("Ya estas a un paso de tus Vacaciones!!!");

} else {
    alert("Por favor indicanos tu edad para continuar tu reserva.");
}
class Cabana {

    constructor(nombre, cantidad, capacidad, costo) {

        this.nombre = nombre;
        this.cantidad = cantidad;
        this.capacidad = capacidad;
        this.costo = costo

    }

    saluda() {
        return alert(`Hola somos complejo ${this.nombre} tenemos ${this.cantidad} cabañas para ofrecerte, 
        la cabaña A cuenta con una capacidad de hasta ${this.capacidad} personas  y tendrá un costo de
         $ ${this.costo} por persona.`);
    }
    opcion2() {
        return alert(`Mientras que nuestra cabaña B cuenta con una capacidad de ${this.capacidad}
         personas y tendrá un costo de $ ${this.costo} por persona.`)
    }


}

const cabana1 = new Cabana("refugio", "dos", "seis", 1500);

const cabana2 = new Cabana("refugio", "dos", "diez", 3000);

console.log(cabana1.saluda());

console.log(cabana2.opcion2());

let cantidadPersonas = prompt("Cuantas personas van a ser?");

let cantidadNoches = prompt("Cuantas noches quieren alquilar?");

let costo1 = 1500;

let costo2 = 3000;

let total1 = (costo1 * cantidadPersonas * cantidadNoches);

let total2 = (costo2 * cantidadPersonas * cantidadNoches);

function totalEfectivo(totalParametro, descuentoParametro, impuestosParametro) {
    let total = (totalParametro * descuentoParametro) + (totalParametro * impuestosParametro)
    return total
}

function totalTarjeta(totalParametro, impuestosParametro) {

    let total = totalParametro + (totalParametro * impuestosParametro)
    return total
}

let descuento = 0.8

let impuestos = 0.21

function escogerMetodoDePago(totalParametro, descuentoParametro, impuestosParametro) {
    let metodoDePago = prompt("Elige el metodo de pago \n1.Efectivo\n2.Tarjeta");

    if (metodoDePago == 1) {
        alert(`El total a pagar es $ ${totalEfectivo(totalParametro, descuentoParametro, impuestosParametro)}`);

    } else {

        alert(`El total a pagar es $ ${totalTarjeta(totalParametro, impuestosParametro)}`);
    }

}

let reserva = prompt("Que cabaña te gustaria alquilar A o B").toUpperCase();

if (reserva == "A") {
    escogerMetodoDePago(total1, descuento, impuestos)
} else if (reserva == "B") {
    escogerMetodoDePago(total2, impuestos, descuento)
} else {
    alert("La opcion es incorrecta")
}

const extras = [
    { extras: "sombrilla", precio: 2000 },
    { extras: "reposera", precio: 1000 },
    { extras: "heladerita", precio: 3000 },
];
const carrito = [];

let misExtras;
let finalizacion;

do {

    misExtras = prompt("Tenemos para alquilar sombrilla, reposera y heladerita. Ingrese un pedido o ingrese finalizar pedido ");

    const seleccionExtras = extras.find(extras => extras.extras === misExtras);

    carrito.push(seleccionExtras);

    finalizacion = prompt('1. Termina pedido \n2.Sigue haciendo pedidos')

} while (finalizacion !== "1");

console.log(carrito);


const total = (array) => {
    return array.reduce((acc, el) => acc + el.precio, 0)
};

const lista = (array) => {
    return array.map((data) => `${data.extras} : $${data.precio}.\n`)

}

alert(`su cuenta es un total de $${total(carrito)} \n\n Carrito:\n\n${lista(carrito)}`);

const extras = [
    { extras: "sombrilla", modelo: "sombrilla", precio: 2000, img: "media/sombrilla.jfif" },
    { extras: "reposera", modelo: "reposera", precio: 1000, img: "media/reposera.jfif" },
    { extras: "heladerita", modelo: "heladerita", precio: 3000, img: "media/heladerita.jfif" },
];
const contenedorTienda = document.getElementById(`contenedorTienda`);
const contenedorarrito = document.getElementById(`contenedorCarrito`);
const eliminarProducto = document.getElementById(`eliminarExtras`);
let eliminaciones = 0;

const carrito = []

const renderizarTienda = (objetoExtras) => {

    contenedorTienda.innerHTML = ``;

    for (const producto of extras) {
        const divProducto = document.createElement(`div`)
        const imgProducto = document.createElement(`img`)
        const nombreProducto = document.createElement(`h2`)
        const precioProducto = document.createElement(`h3`)

        divProducto.className = `cardTienda`;
        imgProducto.className = `card-img-top`;
        nombreProducto.className = `nombre-producto`;
        precioProducto.className = `card-precio`;
        botonComprar.className = `btn btn-primary`;

        imgProducto.src = producto.img;
        nombreProducto.append(extra.modelo);
        precioProducto.append(`$${extra.precio}`);
        botonComprar.append(`comprar`);
        botonComprar.id = `${producto.id}`;

        botonComprar.onclick = () => {
            const productoComprado = extras.find(producto => producto.id === botonComprar.id);
            carrito.push({ nombre: productoComprado.modelo, precio: productoComprado.precio })
        }

        divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);

        contenedorTienda.append(divTiendaProducto);
        const option = document.createElement(`option`);
        option.value = producto.id;
        option.text = producto.modelo;
        selectEliminar.append(option);


    }
}

const mostrarCarrito = () => {
    for (const producto of carrito) {
        const nombreProducto = `<h4>Producto: ${extras.modelo}<h4/>`
        const precioProducto = `<h4>Producto: ${extras.precio}<h4/>`
        contenedorCarrito.innerHTML += nombreProducto
        contenedorCarrito.innerHTML += precioProducto
    }
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    contenedorCarrito.append(`Total Compra: ${total}`)
}

let botonCarrito = document.getElementById("btnCarrito")
botonCarrito.onclick = mostrarCarrito;

console.log(document.getElementsByTagName(`div`))
console.log(document.getElementsByClassName(`card`));

const eliminarProducto = (productoId) => {

    selectEliminar.innerHTML = ``;

    eliminaciones++

    productosNuevo = extras.filter(producto => productoId !== productoId);

    renderizarTienda(productosNuevo)
}

if (eliminaciones === 0) {
    renderizarTienda(extras)
}

const btnEliminarProd = document.getElementById(`btnEliminarProd`)

btnEliminar.onclick = () => {
    eliminarProducto(selectEliminar.value)
}

