var dropdown = document.querySelector(".dropdown_menu-button_open")

function open () {
    var links = document.querySelector(".dropdown_menu-items")
        links.classList.toggle("dropdown_menu-items__open")  
}

dropdown.onclick = open;