// Variables
const botonMenu = document.querySelector('.hamburger');
const panelMenu = document.querySelector('.navegacion__links');
botonMenu.addEventListener('click', menu)

function menu(e) {
    botonMenu.classList.toggle('is-active');
    panelMenu.classList.toggle('menu-activo');
}

