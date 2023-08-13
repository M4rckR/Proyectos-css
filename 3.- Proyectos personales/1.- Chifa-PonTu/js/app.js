// Variables menu-hamburguesa
const botonMenu = document.querySelector('.hamburger');
const panelMenu = document.querySelector('.navegacion__links');

// Variables de carrito
const contenidoCarrito = document.querySelector('.carrito__tabla tbody')
const vaciarCarrito = document.querySelector('.carrito-vaciar');
const listaPlatos = document.querySelector('.platos');
let articulosCarrito = [];

cargarEventListener();

function cargarEventListener(){
    // Interactuar con el menu
    botonMenu.addEventListener('click', menu);

    // Agregar plato al carrito
    listaPlatos.addEventListener('click', agregarPlato);
}

// Interactuar con el menu
function menu(e) {
    botonMenu.classList.toggle('is-active');
    panelMenu.classList.toggle('menu-activo');
}

// Agregar plato al carrito
function agregarPlato(e) {
    e.preventDefault();
    if(e.target.classList.contains('plato__agregar')){
        const platoSeleccionado = e.target.parentElement.parentElement;
        leerPlato(platoSeleccionado);
    }
}

// Leer contenido del curso
function leerPlato(plato){
    // console.log(plato);

    // Creamos un objeto, que contendrá la información del plato
    const infoPlato = {
        nombre : plato.querySelector('.plato .plato__texto .plato__nombre').textContent,
        precio: plato.querySelector('.plato .plato__texto .plato__precio').textContent,
        id: plato.querySelector('.plato .plato__texto .plato__agregar').getAttribute('data-id'),
        cantidad : 1
    }

    // Comprobar si se repite un elemento
    const existe = articulosCarrito.some(plato => plato.id === infoPlato.id);
    const platoPrecio = parseFloat(infoPlato.precio.slice(2));
    console.log(platoPrecio);
    // En caso exista actualizamos la cantidad
    if(existe){
        articulosCarrito.forEach(plato =>{
            if(plato.id === infoPlato.id){
                plato.cantidad++;
                plato.precio = `S/${platoPrecio * plato.cantidad}.00`;
            } 

        })
    }

    else {
        articulosCarrito = [...articulosCarrito, infoPlato]
    }

    // console.log(articulosCarrito);
    // Agregar elementos al carrito
    carritoHtml();
}

function carritoHtml() {
    limpiarHtml();

    articulosCarrito.forEach(plato => {
        const {nombre, precio, id, cantidad} = plato;
        const row = document.createElement('tr');
        row.innerHTML = 
        `
            <td class="carrito__nombre" >${nombre}</td>
            <td>${cantidad}</td>
            <td>${precio}</td>
            <td> <a href="#" class="plato__borrar" data-id="${id}" >X</a> </td>
        `
        contenidoCarrito.appendChild(row);
    })
}

function limpiarHtml(){
    while(contenidoCarrito.firstChild){
        contenidoCarrito.removeChild(contenidoCarrito.firstChild)
    }
}