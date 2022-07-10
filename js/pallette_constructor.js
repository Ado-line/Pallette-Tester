var unset_colors = document.getElementsByClassName("color-selector-unset");
var color_pickers = document.getElementsByClassName("color-selector");
var menu = document.getElementById("pallette-menu");
var div1 = document.createElement("div");

// Junk for making the color picker element.

const color_picker_text = document.createElement("p");
const color_picker_text_node = document.createTextNode("Pick a color!");
color_picker_text.appendChild(color_picker_text_node);

// Junk for making the color unset element.

const unset_color_html = "<div onclick='create_color(event)' class='color-selector-unset'><p>Add a Color +</p></div>";


function create_color(event) {
    div1.setAttribute("class","color-selector");
    div1.appendChild(color_picker_text);
    event.target.parentNode.replaceChild(div1, event.target);
    menu.innerHTML = menu.innerHTML + unset_color_html;
    return;
}