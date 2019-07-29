$(function(){

	$('.btn').click(function(e){
		e.preventDefault();
		$('.item').addClass('active');
		$('.btn-prev').addClass('active');
		$('.nav-icon').addClass('color');
	})

	$('.btn-prev').click(function(){
		$('.item').removeClass('active');
		$('.btn-prev').removeClass('active');
		$('.nav-icon').removeClass('color');
	})

	$('.nav-icon').click(function(){
  $('.menu').toggleClass("open");
	$('.nav-icon__btn').toggleClass('active');
	$('.nav-icon').toggleClass('active');
	$('.menu__item').toggleClass('active');
});

$('.title').addClass('active');
$('.btn').addClass('active');
});
