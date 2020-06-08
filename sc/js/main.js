$(function(){

  $('.slider_list').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   dots: false,
   centerMode: true,
   centerPadding: '100px',
   variableWidth: true,
   prevArrow: '.slider-prev',
   nextArrow: '.slider-next',
   responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '20px'
      }
    }
  ]
  });

  $('.nav-icon').click(function(){
    $(this).toggleClass('active');
    $('.nav').toggleClass('active');
  })

  wow = new WOW(
    {
      offset: 200
    }
  )
  wow.init();

});
