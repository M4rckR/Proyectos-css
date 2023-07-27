const d = document;
export default function menu(menu, panel){
    d.addEventListener('click', e => {
        if(e.target.matches(menu) || e.target.matches(`${menu} *`)){
            d.querySelector(menu).classList.toggle("is-active")
            d.querySelector(panel).classList.toggle("menu-activo")
            d.querySelector('.header__marca h1').classList.toggle("visibilidad-none")
            d.querySelector('main').classList.toggle("visibilidad-none")
        }

    })
}