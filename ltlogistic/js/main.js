$(function(){

  $('.menu').mouseenter(function(){
    $('.menu').addClass('active');
    $('.nav-icon').addClass('active');
  })
  $('.menu').mouseleave(function(){
    $('.menu').removeClass('active');
    $('.nav-icon').removeClass('active');
  })
  $('.nav-icon').click(function(){
    $('.menu').toggleClass('active');
    $('.nav-icon').toggleClass('active');
  })

  $('.map-slider_list').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     arrows:false,
     fade: true,
     autoplay: true,
     autoplaySpeed: 3000,
     speed:1000,
     dots:true,
  });
  $('.slider-logo_list').slick({
     slidesToShow: 4,
     slidesToScroll: 4,
     infinite: true,
     arrows:false,
     autoplay: true,
     autoplaySpeed: 2000,
     speed:1400,
     dots:true,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToScroll: 3,
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 550,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false
      }
    }
  ]
  });

  $('.slider-team_list').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     // arrows: false,
     fade: true,
     autoplay: true,
     autoplaySpeed: 5000,
     speed: 1000,
     dots: false,
     prevArrow: '.slider-team_prev',
     nextArrow: '.slider-team_next',
  });

  let w = $(window);

  w.on('scroll', function(){
    let top = $(this).scrollTop();
    parallax(top);
  });

  function parallax(top) {
     $('.truck_img').css(
       'transform', 'translateX(' + (top/2) + 'px)'
     );
     $('.wheel').css(
       'transform', 'rotateZ(' + (top/2) + 'deg)'
     );
     $('.plane').css(
       'transform', 'rotate(' + (top/17) + 'deg)'
     );
     $('.ship').css(
       'transform', 'rotate(' + (top/-17) + 'deg)'
     );
    }



    $(".number-item_title").each(function() {
    	var tcount = $(this).data("count");
    	$(this).animateNumber({
        number: tcount,
    		easing: 'easeInQuad',
      },2000);
    });

  $('.fade-in').viewportChecker({
    classToAdd: 'active',
    offset: '20%',
  });

  $('.fade-in-opacity').viewportChecker({
    classToAdd: 'active',
    offset: '40%',
  });

  $(function(){
    $('.accordion-body').hide();
    $('.accordion-head').click(function() {
      $(this).toggleClass('active');
      $(this).next().slideToggle();
      return false;
    })
  })

  $('.open-callback').click(function(){
    $('.modal').addClass('active');
  });
  $('.modal-close').click(function(){
    $('.modal').removeClass('active');
  });
  $('.modal-block_btn').click(function(){
    $('.modal').removeClass('active');
  })



//form

  // $('.cost-form-btn-next').click(function(e){
  //   e.preventDefault();
  //   $('.cost-form_part-1').removeClass('active');
  //   $('.cost-form_part-2').addClass('active');
  // });
  $('.cost-form-btn-next').click(function(e){
   e.preventDefault();
   var form = $('.cost-form')
     form.find('.required').each(function(){
         if($(this).val() != ''){
             $(this).removeClass('empty_field');
         } else {
             $(this).addClass('empty_field');
         }
     });
     var sizeEmpty = form.find('.cost-form_part-1 .empty_field').length;
     if(sizeEmpty > 0){
         form.find('.empty_field').parents().addClass('no-valid');
         setTimeout(function(){
             form.find('.empty_field').parents().removeClass('no-valid');
         },1500);
     } else {
         $('.cost-form_part-1').removeClass('active');
         $('.cost-form_part-2').addClass('active');
     }
 });

  $('.cost-form-btn-prev').click(function(e){
    e.preventDefault();
    $('.cost-form_part-2').removeClass('active');
    $('.cost-form_part-1').addClass('active');
  });

  $(function(){
    $('.main-cost-form').each(function(){
      var form = $(this),
      btn = form.find('.cost-form-btn');
      form.find('.required').addClass('empty_field');

      function checkInput(){
        form.find('.required').each(function(){
          if($(this).val() != ''){
      		    $(this).removeClass('empty_field');
          } else {
      		    $(this).addClass('empty_field');
          }
        });
     }

     function checkCheckbox(){
       form.find('.checkbox-required').each(function(){
         if($(this).prop("checked")){
            $(this).removeClass('empty_field');
         } else {
            $(this).addClass('empty_field');
         }
       });
    }

     function lightEmpty(){
        form.find('.empty_field').parents().addClass('no-valid');
        setTimeout(function(){
          form.find('.empty_field').parents().removeClass('no-valid');
        },1500);
      }

      setInterval(function(){
    	  checkInput();
        checkCheckbox();
          var sizeEmpty = form.find('.empty_field').length;
          if(sizeEmpty > 0){
            if(btn.hasClass('disabled')){
              return false
            } else {
              btn.addClass('disabled')
            }
          } else {
            btn.removeClass('disabled')
          }
        },300);

        btn.click(function(){
          if($(this).hasClass('disabled')){
            lightEmpty();
            return false
          } else {
            $('.modal-sent').addClass('active');
            form.submit();
          }
        });
    })
  })
//end form


});
