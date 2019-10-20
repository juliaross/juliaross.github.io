$(function(){

  $('.js-main-slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   infinite: true,
   dots: true,
   fade: true,
   prevArrow: '.js-main-prev',
   nextArrow: '.js-main-next',
   appendDots: '.js-main-dots',
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      }
    }
  ]
  });


  $('.nav-icon').click(function(){
    $('.nav').toggleClass('active');
    $('body').toggleClass('no-scroll');
  })

});
