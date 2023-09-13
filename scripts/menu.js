
        
        const menu = document.querySelector(".menuResponsivo");
        const navbar = document.querySelector("#navbarContainer");
        let validador = false;
        menu.addEventListener("click", ()=>{
            menu.classList.toggle('active');
            navbar.classList.toggle('active');
        })