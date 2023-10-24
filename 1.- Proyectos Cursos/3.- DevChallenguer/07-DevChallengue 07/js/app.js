let d = document;
let w = window;
let hamburguesa = d.querySelector('.header__menu');
let overlay = d.querySelector('.overlay');
let linksMenu = d.querySelector('.header__links')

cargarEventos();

function cargarEventos(){
    hamburguesa.addEventListener('click', aparecerMenu)
}

function aparecerMenu(e){
    hamburguesa.children[0].classList.toggle('is-active');
    overlay.classList.toggle('ac-overlay');
    linksMenu.classList.toggle('li-active');
}