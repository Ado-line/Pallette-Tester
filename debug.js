var debug_button = document.getElementById("debug-button");
var debug_state = "false";

console.log(document.getElementsByTagName("style"));

console.log(debug_state);

function debug_toggle() {
    if (debug_state == "false") {
        document.getElementsByTagName("div").classList.add('debug');
        debug_state = "true";
        console.log("Debug State was false setting to " + debug_state);
    } else if (debug_state == "true") {
        document.getElementsByTagName("div").classList.remove('debug');
        debug_state = "false";
        console.log("Debug State was true setting to " + debug_state);
    } else {
        console.error("Variable 'debug_state' not set correctly!")
        return
    }
}