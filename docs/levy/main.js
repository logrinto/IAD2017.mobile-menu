$(document).ready(function(){
    $(".menu-toggle a").click(function(){ 
        $(".menu").slideToggle(700);
        $(".menu-toggle").toggleClass("open");
    });
});
