/* let menu = document.getElementById("menu");

let menuload = function() {
  console.log("Hallo");
  setTimeout(function(){
    document.getElementById("menunames").style.transform = "translate(250px, 0px)";
}, 1000);

}

menu.addEventListener("click", menuload);

*/

let menu = document.getElementById("menu");

function openNav() {
    document.getElementById("mySidenav").style.width = "45%";
    document.getElementById("menunames").style.transform = "translate(250px, 0px)";

    const mq = window.matchMedia( "(min-width: 600px)" );

    if (mq.matches) {

      document.getElementById("mySidenav").style.width = "45%";
    // window width is at least 500px
    } else {

      document.getElementById("mySidenav").style.width = "100%";
    // window width is less than 500px
    }
}

menu.addEventListener("click", openNav);



let menuclose = document.getElementById("menuclose");

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

menuclose.addEventListener("click", closeNav);
