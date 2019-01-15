let open = document.getElementById("open")
let close = document.getElementById("close")

var nav_mobile = document.getElementById("myheader");
var nav_mobile_overlay = document.getElementById("myheader_overlay");

function menu_open() {
  var open = document.getElementById("open");
  overlay.classList.remove("hidden");
}

function menu_close() {
  var close = document.getElementById("close");
  overlay.classList.add("hidden");
}


open.addEventListener("click", menu_open);
close.addEventListener("click", menu_close);