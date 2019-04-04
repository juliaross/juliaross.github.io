$(document).ready(function() {

	$('#switch').click(function() {
		$('.options__wrapper').toggleClass('active');
		$('.sites').toggleClass('active');
		$('.information').toggleClass('active');
		$('.steps .block__list').toggleClass('active');
	});

	$('.block__list li').on('click', function(){
	    $('.block__list li.active').removeClass('active');
	    $(this).addClass('active');
	});

	$(function(){
		$('.steps__arrow a').on('click', function(e){
		  $('html,body').stop().animate({ scrollTop: $('#steps').offset().top }, 1000);
		  e.preventDefault();
		});
	});

   $(function($){
	   $(".phone--js").mask("+7 (999) 999 99 99");
	   });

});
