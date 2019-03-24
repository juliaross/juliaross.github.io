$(document).ready(function() {

	$('#nav-toggle').click(function() {
		$('.nav').slideToggle();
		$('.nav-icon__btn').toggleClass('active');
	});

    $('.slider').bxSlider();

    $(".tab-content").not(":first").hide();
	$(".tabs__item").click(function() {
	$(".tabs__item").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab-content").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	var carousel = $("#carousel");
		carousel.owlCarousel();
		pagination: true
		$('#js-prev').click(function () {
		carousel.trigger('owl.prev');
		return false;
		});

	$('#js-next').click(function () {
		carousel.trigger('owl.next');
		return false;
	});

	$(".content-block__item").not(":first").hide();
	$("#tab-content__list li").click(function() {
	$("#tab-content__list li").removeClass("active").eq($(this).index()).addClass("active");
	$(".content-block__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$('#tab-diameter li').on('click', function(){
	    $('#tab-diameter li.active').removeClass('active');
	    $(this).addClass('active');
	});

	$('#tab-lenght li').on('click', function(){
	    $('#tab-lenght li.active').removeClass('active');
	    $(this).addClass('active');
	    $('.price__item.disabled').removeClass('disabled');
	    $(this).addClass('active');
	});

	$('.tooltip').tooltipster();

});

var elements = $('.modal-overlay, .modal');

$('#feedback').click(function(){
    elements.addClass('active');
});
$('#feedback-tab').click(function(){
    elements.addClass('active');
});
$('.close-modal').click(function(){
    elements.removeClass('active');
});



