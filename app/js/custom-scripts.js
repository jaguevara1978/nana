
(function($) {
	'use strict';

	// Sticky Header on Scroll
	var menu = $('#top-header');
	var origOffsetY = menu.offset().top;

	function scroll () {
	  if ($(window).scrollTop() >= origOffsetY) {
	    menu.addClass('sticky');
	  } else {
	    menu.removeClass('sticky');
	  }  
	}
	document.onscroll = scroll;


	// ScrollTop Button
	$('.go-top').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});

	

})(jQuery);