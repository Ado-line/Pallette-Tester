var menu_div = document.getElementById("pallette-menu");

function menu_toggle(direction) {
    switch (direction) {
        case "open":
            menu_div.style['margin-left'] = "0vw";
            break;
        case "close":
            menu_div.style['margin-left'] = "-20vw";
            break;
    }
}