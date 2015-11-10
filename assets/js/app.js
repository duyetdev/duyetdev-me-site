/*-------------------------------------------------*/
/* =  App config
/*-------------------------------------------------*/
window.duyetdevConfig = window.duyetdevConfig || {};
window.duyetdevConfig.instagramClientId = '8b9b2f3dfbaf403497ea3379c424b9ed';

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

/* ==============================================
Github project
=============================================== */

function render_project_datatable(github) {
	if (!github) return false;
	$('#github').DataTable({
		data: github.data,
		"columns": [
			"data": "name",
			"data": "description",
			"data": "language",
			"data": "clone_url"
		]
	});
}
