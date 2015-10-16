/*-------------------------------------------------*/
/* =  Full-window section
/*-------------------------------------------------*/

var windowHeight = $(window).height(),
	topSection = $('.section');
topSection.css('height', windowHeight);

$(window).resize(function() {
	var windowHeight = $(window).height();
	topSection.css('height', windowHeight);
});
/* ==============================================
Preloader
=============================================== */

$(window).load(function() {
	$('.status').fadeOut();
	$('.preloader').delay(350).fadeOut('slow');
});
