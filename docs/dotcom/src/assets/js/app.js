import $ from 'jquery';
import 'what-input';

// Import toggle function for jQuery library
import './lib/jquery.func_toggle';

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

// menu switch in, passiv & out
let navmenu = document.getElementById('nav-menu');
let navwrapper = document.getElementById('nav-wrapper');
let navpicture = document.getElementById('nav-picture');
$(navmenu).funcToggle('click', function() {
    $(navwrapper).css({
        transform: 'translateX(0)',
    });
    $(navpicture).css({
        transform: 'translateX(0)'
    });
    $('#nav-menu-outer > p:first').html("");
    $(navmenu).css('transform','rotate(225deg)').css('left','80px');
    $('body').css('overflow-y', 'hidden');
    $('#nav-menu-outer').css('left','80px');
}, 
function() {
    $(navwrapper).css({
        transform: ''
    });
    $(navpicture).css({
        transform: ''
    });
    $('#nav-menu-outer > p:first').html("MENU");
    $(navmenu).css('transform','').css('left','');
    $('body').css('overflow-y', '');
    $('#nav-menu-outer').css('left','');
});

// background picture change function
$(".evan").hover(function(){
    $(navpicture).css("background-image", "url('./assets/img/evanspiegel.jpg')");
    }, function(){
    $(navpicture).css("background-image", "url('./assets/img/kimdotcom.jpg')");
});