

let show = true;
const menuNavbar = document.getElementById("navabar");
const menuReponsivo = document.getElementById('menuResponsivo');

menuToggle.addEventListener('click', ()=> {
    menuContent.classList.toggle('on', show);
    show = !show;
})  