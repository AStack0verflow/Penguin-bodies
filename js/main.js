/*******************************************************************************

	CSS on Sails Framework
	Title: Community Specific
	Author: XHTMLized (http://www.xhtmlized.com/)
	Date: May 2011

*******************************************************************************/
$.noConflict();
  jQuery(document).ready(function($) {
	//homepage slideshow
	if($('.scrollable').length){	
	$(".scrollable").scrollable({circular: false}).navigator({
		navi: '#thumb-nav',
		naviItem: 'a',
		activeClass: 'current'
		});	
	}
	
	//
	var sidebarHeight = $('#sidebar').height();
	var contentHeight = $('#content').height();
	if( sidebarHeight > contentHeight ) {
		$('#sidebar').css('padding-bottom','23px');
	}
	
});


// DD_belatedPNG fix for IE6
if (typeof DD_belatedPNG !== 'undefined') {
	var PNG_fix_selectors = [
		'#action-call',
		'#subpage-title-holder',
		'a.browse'
	];
	DD_belatedPNG.fix(PNG_fix_selectors.join(','));
}