$(window).load(function() {

	$('#nav-toggle').click(function() {
		$('.pull').slideToggle();
		$('.nav-icon__btn').toggleClass('active');
	});
});