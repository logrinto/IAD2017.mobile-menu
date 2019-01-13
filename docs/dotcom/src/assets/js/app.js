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

// Import toggle function for jQuery library
import './lib/jquery.func_toggle';

$(document).foundation();

// menu switch in, passiv & out
$('#nav-menu, #nav-menu-mobile').funcToggle('click', function() {
    $('#nav-wrapper').css({transform: 'translateX(0)',});
    $('#nav-picture').css({transform: 'translateX(0)'});
    $('#nav-menu-outer > p:first').html("CLOSE");
    $('#nav-menu-outer-mobile > p:first').html("CLOSE");
    $('#nav-menu').css('transform','rotate(225deg)').css('left','65px');
    $('#nav-menu-mobile').css('transform','rotate(225deg)');
    $('body').css('overflow-y', 'hidden');
    $('#nav-menu-outer').css('left','65px');
    $('#scroll-info').addClass('arrowpos');
}, 
function() {
    $('#nav-wrapper').css({transform: ''});
    $('#nav-picture').css({transform: ''});
    $('#nav-menu-outer > p:first').html("MENU");
    $('#nav-menu-outer-mobile > p:first').html("MENU");
    $('#nav-menu').css('transform','').css('left','');
    $('#nav-menu-mobile').css('transform','');
    $('body').css('overflow-y', '');
    $('#nav-menu-outer').css('left','');
    $('#scroll-info').removeClass('arrowpos');
});

// background picture change function
$(".anonymous").hover(function(){
    $('#nav-picture').css("background-image", "url('../anonymous/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});
$(".fake").hover(function(){
    $('#nav-picture').css("background-image", "url('../fake/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});
$(".manning").hover(function(){
    $('#nav-picture').css("background-image", "url('../manning/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});
$(".snowden").hover(function(){
    $('#nav-picture').css("background-image", "url('../snowden/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});
$(".musk").hover(function(){
    $('#nav-picture').css("background-image", "url('../musk/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});
$(".spiegel").hover(function(){
    $('#nav-picture').css("background-image", "url('../spiegel/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});
$(".levy").hover(function(){
    $('#nav-picture').css("background-image", "url('../levy/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});
$(".verou").hover(function(){
    $('#nav-picture').css("background-image", "url('../verou/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});
$(".mayer").hover(function(){
    $('#nav-picture').css("background-image", "url('../mayer/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});
$(".baker").hover(function(){
    $('#nav-picture').css("background-image", "url('../baker/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});
$(".wong").hover(function(){
    $('#nav-picture').css("background-image", "url('../wong/preview.jpg')");
    }, function(){
    $('#nav-picture').css("background-image", "url('../dotcom/preview.jpg')");
});