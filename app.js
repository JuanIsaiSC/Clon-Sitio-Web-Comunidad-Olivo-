
const headerContenedorMenuIcono = document.querySelector(".header__contenedor__menu__icono");
const headerContenedorNav = document.querySelector(".header__contenedor__ul")
console.log(headerContenedorMenuIcono)
console.log(headerContenedorNav)

headerContenedorMenuIcono.addEventListener("click", () => {
    headerContenedorNav.classList.toggle("header__contenedor__ul--mostrar");
})

