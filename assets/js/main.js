$(document).ready(function() {
	var headerFixed = false;

	setTimeout(function() {
		$('body').removeClass('preload');
		$('.screen-load').remove();
		$('.body-content').fadeIn();
		$('.mastfooter').fadeIn();
	}, 350);

	$(window).bind('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll > 50 && headerFixed == false) {
			$('#masthead').css({'position': 'fixed', 'top': 0, 'left': 0, 'opacity': 0.95, 'border-bottom': '1px solid #EEEEEE'});
			$('#landing-bg').css({'margin-top': '80px'});
			headerFixed = true;
		}
	});

	$('.flexslider').flexslider();

	$('.nav-toggle').click(function(){
		$(this).toggleClass('open');
		$('.mobile-nav').toggleClass('nav-open');
		$('body').toggleClass('no-scroll');
	});
})


