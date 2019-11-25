$(function(){

  $('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-nav'
 });
 $('.slider-nav__list').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: false,
   focusOnSelect: true,
   prevArrow: '.js-video_prev',
   nextArrow: '.js-video_next',
   responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }
  ]
 });

 $('.slider__list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: '280px',
  prevArrow: '.js-gallery_prev',
  nextArrow: '.js-gallery_next',
  responsive: [
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 3,
        centerPadding: '80px',
      }
    },
   {
     breakpoint: 960,
     settings: {
       slidesToShow: 2,
       centerPadding: '50px',
     }
   },
   {
     breakpoint: 520,
     settings: {
       slidesToShow: 2,
       centerPadding: '20px',
     }
   },
   {
     breakpoint: 380,
     settings: {
       slidesToShow: 2,
       centerPadding: '10px',
     }
   }
 ]
});

});
