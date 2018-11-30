// import `.scss` files
import "./styles.scss";

// import
// import Test from './js/test'
// let test = new Test("Hello World!")
// test.log()

// Burgermenu Starts Here
(function(){
    let burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');

    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());