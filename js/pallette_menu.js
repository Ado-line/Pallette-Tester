var unset_colors = document.getElementsByClassName("color-selector-unset")
console.log(unset_colors)

for (var i = 0; i < unset_colors.length; i++) {
    unset_colors[i].innerHTML = "<p>Test</p>"
}