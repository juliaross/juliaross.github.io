$(function(){


  $('.nav-icon').click(function(){
    $('.nav').toggleClass('active');
    $('.nav-icon').toggleClass('active');
    $('body').toggleClass('no-scroll');
})

  $('.ms-slider_list').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     fade: true,
     autoplay: true,
     // autoplaySpeed: 5000,
     autoplaySpeed: 3000,
     speed:1000,
     dots:true,
     prevArrow: '.ms-slider_prev',
     nextArrow: '.ms-slider_next',
     appendDots: '.ms-slider_dots',
     responsive: [
    {
      breakpoint: 480,
      settings: {
        dots: false,
        arrows: false,
      }
    }
  ]
  });

  $('.houses_list').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 5000,
     speed:1000,
     dots:true,
     prevArrow: '.houses_prev',
     nextArrow: '.houses_next',
     appendDots: '.houses_dots',
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });

  $('.technologies_list').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 5000,
     speed:1000,
     dots:true,
     prevArrow: '.technologies_prev',
     nextArrow: '.technologies_next',
     appendDots: '.technologies_dots',
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });


  $('.reviews-slider_list').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 5000,
     speed:1000,
     dots:true,
     prevArrow: '.reviews_prev',
     nextArrow: '.reviews_next',
     appendDots: '.reviews_dots'
  });

let w = $(window);

w.on('scroll', function(){
  let top = $(this).scrollTop();
  parallax(top);
});

function parallax(top) {
  $('.letter-a').css(
    'transform', 'translateY(' + (top/-2) + 'px)'
  );
  $('.letter-s').css(
    'transform', 'translateY(' + (top/-5) + 'px)'
  );
  $('.letter-u').css(
    'transform', 'translateY(' + (top/-4) + 'px)'
  );
  $('.letter-t').css(
    'transform', 'translateY(' + (top/-6) + 'px)'
  );
  $('.letter-a_2').css(
    'transform', 'translateY(' + (top/-8) + 'px)'
  );
  $('.letter-l').css(
    'transform', 'translateY(' + (top/-6) + 'px)'
  );
  $('.letter-o').css(
    'transform', 'translateY(' + (top/-7) + 'px)'
  );
  $('.word-1').css(
    'transform', 'translateX(' + (top/4) + 'px)'
  );
  $('.word-2').css(
    'transform', 'translateX(' + (top/-12) + 'px)'
  );
  $('.word-3').css(
    'transform', 'translateX(' + (top/4) + 'px)'
  );
  $('.word-4').css(
    'transform', 'translateX(' + (top/2) + 'px)'
  );
}

  $('.main-screen_subtitle').viewportChecker({
      classToAdd: 'view',
      offset: 0,
  });
  $('.logo').viewportChecker({
      classToAdd: 'view',
      offset: 0,
  });
  $('.main-screen_img').viewportChecker({
      classToAdd: 'view',
      offset: 0,
  });
  $('.slider-controls').viewportChecker({
      classToAdd: 'view',
      offset: 0,
  });
  $('.scroll').viewportChecker({
      classToAdd: 'view',
      offset: 0,
  });
  $('.advantages-icon').viewportChecker({
      classToAdd: 'view',
      offset: '40%',
  });
  $('.experience_item').viewportChecker({
      classToAdd: 'view',
      offset: '40%',
  });
  $('.inner-head_title').viewportChecker({
      classToAdd: 'view',
      offset: '0%',
  });
  $('.sale_item').viewportChecker({
      classToAdd: 'view',
      offset: '20%',
  });
  $('.p-service_text').viewportChecker({
      classToAdd: 'view',
      offset: '20%',
  });
  $('.blue-block-numbers_item').viewportChecker({
      classToAdd: 'view',
      offset: '30%',
  });
  $('.dop-block').viewportChecker({
      classToAdd: 'view',
      offset: '30%',
  });
  $('.form-order').viewportChecker({
      classToAdd: 'view',
      offset: '35%',
  });
  $('.blue-block-banner_wrap').viewportChecker({
      classToAdd: 'view',
      offset: '35%',
  });
  $('.two-column-blue_view-wrap').viewportChecker({
      classToAdd: 'view',
      offset: '35%',
  });
  $('.step_text').viewportChecker({
      classToAdd: 'view',
      offset: '20%',
  });
  $('.step-img_numbers').viewportChecker({
      classToAdd: 'view',
      offset: '20%',
  });
  $('.step-img_pic').viewportChecker({
      classToAdd: 'view',
      offset: '20%',
  });




  $('.step-slider-01 .step-slider_list').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 5000,
     speed:1000,
     dots:false,
     variableWidth: true,
     centerMode: true,
     prevArrow: '.step-slider-01_arrow-prev',
     nextArrow: '.step-slider-01_arrow-next',
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });

  $('.step-slider-02 .step-slider_list').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 5000,
     speed:1000,
     dots:false,
     variableWidth: true,
     centerMode: true,
     prevArrow: '.step-slider-02_arrow-prev',
     nextArrow: '.step-slider-02_arrow-next',
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });

  $('.step-slider-03 .step-slider_list').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 5000,
     speed:1000,
     dots:false,
     variableWidth: true,
     centerMode: true,
     prevArrow: '.step-slider-03_arrow-prev',
     nextArrow: '.step-slider-03_arrow-next',
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });


  $('.logo-slider_list').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
     infinite: true,
     autoplay: true,
     autoplaySpeed: 5000,
     speed:1000,
     dots:true,
     arrows: false,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
  });


  $('.details_item').hover(function(){
    var number = $(this).data().number;
    $(this).addClass('active').siblings().removeClass('active');
    $(this).parents('.step').find('[data-number="'+number+'"]').addClass('active').siblings().removeClass('active');

  });



});
