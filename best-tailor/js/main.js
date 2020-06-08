$(function(){

  $('.slider__list').slick({
   slidesToShow: 2,
   slidesToScroll: 1,
   prevArrow: '.js-comments_prev',
   nextArrow: '.js-comments_next',
   responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });


  $('.nav-icon').click(function(){
    $('.nav').toggleClass('active');
    $('.nav-icon').toggleClass('active');
    $('body').toggleClass('no-scroll');
  })

  var w = $('body').width();
	if(w<768) {
    $('.nav__item.dropdown').click(function(){
      $('.dropdown-menu').toggleClass('active');
    })
  }

// калькулятор

  $('.calc__right span').click(function(){
    $('.modal-wrap').addClass('active');
  })
  $('.modal-close').click(function(){
    $('.modal-wrap').removeClass('active');
    $('.step-1').addClass('active').siblings().removeClass('active');
  })

  $('.tab-head_item').click(function(){
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).parent().next().children().eq($(this).index()).fadeIn().siblings().hide();
  })

  $('.modal_btn').click(function(){
    $('.modal.active').removeClass('active').next().addClass('active');
  })

  let selectCategory = function(nameSelector){
    $('.' + nameSelector).click(function(){
      $(this).toggleClass('c-active').siblings().removeClass('c-active');
    })
  }
  selectCategory('models_item');
  selectCategory('cut_item');
  selectCategory('js-cloth');
  selectCategory('c-cloth_item');

  let navForm = function(n) {
    $('.modal-nav_item:nth-child(' + n + ')').click(function(){
      let numberStep = n - 1;
        $('.modal.active').removeClass('active');
        $('.step-' + numberStep ).addClass('active');
    })
  }
  navForm(2);
  navForm(3);

});
