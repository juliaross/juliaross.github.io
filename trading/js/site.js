$(document).ready(function() {
 
 
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
    return false;
});
 

 $(".nav-item__link").click(function(){
 // $(".main-screen__content").addClass("fadeOutUp");
 $(".tab-content").addClass("delay fadeIn");

});

 
});