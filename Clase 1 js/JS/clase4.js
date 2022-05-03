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
