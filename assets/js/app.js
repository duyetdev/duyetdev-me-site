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

function render_project_datatable(table_id, github) {
	if (!github) return false;
	$(table_id || '#github').DataTable({
		"data": github.data,
		"columns": [
			{"data": "name"},
			{"data": "description"},
			{"data": "language"},
			{"data": "clone_url"}
		],
		"fnRowCallback": function( nRow, aData, iDisplayIndex ) {
			console.log(aData)
			$('td:eq(0)', nRow).html('<a href="' + aData.html_url + '"><strong>' + aData.name + '</strong></a>');
			$('td:eq(3)', nRow).html('<a href="' + aData.html_url + '">' + aData.git_url + '</a>');
			return nRow;
		},
		"info": false,
		"paging": false
	});
}

function render_project_datatable_1(github) {
	return render_project_datatable('#github_1', github);
}
function render_project_datatable_1(github) {
	return render_project_datatable('#github_1', github);
}
function render_project_datatable_1(github) {
	return render_project_datatable('#github_1', github);
}
function render_project_datatable_1(github) {
	return render_project_datatable('#github_1', github);
}
function render_project_datatable_1(github) {
	return render_project_datatable('#github_1', github);
}
function render_project_datatable_1(github) {
	return render_project_datatable('#github_1', github);
}
function render_project_datatable_1(github) {
	return render_project_datatable('#github_1', github);
}
