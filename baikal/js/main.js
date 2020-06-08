$(function(){


  $('.nav-icon').click(function(){
    $('.nav').toggleClass('active');
    $('.nav-icon').toggleClass('active');
    $('body').toggleClass('no-scroll');
})

  $('.slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   infinite: true,
   arrows:false,
   fade: true,
   autoplay: true,
   autoplaySpeed: 5000,
   speed:1000,
   dots:true,
  });
});

$('.coast_item').mouseenter(function(){
  $(this).removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide');
})
$('.coast_item').mouseleave(function(){
  $(this).removeClass('show').siblings().removeClass('hide');
})


$('a[href*="#"]').click(function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
