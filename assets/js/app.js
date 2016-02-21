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
	$('#preloader').delay(350).fadeOut('slow');
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
			{"data": "clone_url"},
			{"data": "statuses_url"}
		],
		"fnRowCallback": function( nRow, aData, iDisplayIndex ) {
			$('td:eq(0)', nRow).html('<a href="' + aData.html_url + '"><strong>' + aData.name + '</strong></a>');
			$('td:eq(3)', nRow).html('<a href="' + aData.html_url + '">' + aData.git_url + '</a>');
			$('td:eq(4)', nRow).html('<iframe src="https://ghbtns.com/github-btn.html?user='+ aData.owner.login +'&repo='+ aData.name +'&type=star&count=true" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>');
			return nRow;
		},
		"info": false,
		"paging": false,
		"bFilter": false
	});
}

function render_project_datatable_1(github) {
	return render_project_datatable('#github_1', github);
}
function render_project_datatable_2(github) {
	return render_project_datatable('#github_2', github);
}
function render_project_datatable_3(github) {
	return render_project_datatable('#github_3', github);
}
function render_project_datatable_4(github) {
	return render_project_datatable('#github_4', github);
}
function render_project_datatable_5(github) {
	return render_project_datatable('#github_5', github);
}
function render_project_datatable_6(github) {
	return render_project_datatable('#github_6', github);
}
function render_project_datatable_7(github) {
	return render_project_datatable('#github_7', github);
}
function render_project_datatable_8(github) {
	return render_project_datatable('#github_8', github);
}

/* Lasted blogs */
function duyetdevRelatedPost(xml) {
	var limit = -1;
	var utm_query = 'utm_source=duyetdev-me-site&utm_medium=link&utm_campaign=from-me-site-tracker';

	var _ul = $('<ul></ul>');

	var _i = 0;
	$(xml).find('entry').each(function(){
		if (_i >= limit && limit > 0) return;
		
		var _a = $('<a></a>');

		var title = $(this).find('title').eq(0).text();
		var link = $(this).find('link[rel=\'alternate\']').attr('href');
		
		if (link && link != undefined) {
			_a.html(title);
			_a.attr('href', link + '?' + utm_query);
			_a.attr('title', title);

			_ul.append($('<li></li>').html(_a));	
			_i++;
		}
	});

	$("#lasted").html(_ul);	
}
