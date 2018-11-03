$(window).load(function() {

	$('.js-nav-icon__btn').click(function() {
		$(this).toggleClass('active');
	});

	$('#nav-toggle').click(function() {
		$('.pull').slideToggle();
	});

	$('#js-responsive__slider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$(function() {		
	 $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1800);
        e.preventDefault();
        return false;
    	});
	});

});



