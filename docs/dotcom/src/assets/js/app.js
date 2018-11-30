import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

// menu switch open & close
let navmenu = document.getElementById('nav-menu');
let navwrapper = document.getElementById('nav-wrapper');
function menu_state_active(){
    $(navwrapper).css({
        transform: 'translateX(0)'
    });
    $(this).one("click", menu_state_deactive);
};
function menu_state_deactive(){
    $(navwrapper).css({
        transform: 'translateX(-100vw)'
    });
    $(this).one("click", menu_state_active);
};
$(navmenu).one("click", menu_state_active);