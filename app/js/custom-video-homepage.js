
(function($) {
	'use strict';

	$(document).ready(function() {
	  $('#simple-menu').sidr();

	  $('#sidr button').click(function(event) {
	  	$.sidr('close', 'sidr');
	  });

	  $('#sidr ul li a[href^="#"]').click(function(event) {
	  	event.preventDefault();
	  	$.sidr('close', 'sidr');
	  	var aniLocation = $(this).attr('href');
	  	if (aniLocation != '#') {
	    	$('body, html').animate({
	    	    scrollTop : $(aniLocation).offset().top - 10
	    	}, {
	    	    duration: 1000,
	    	    queue: false,
	    	    specialEasing: {
					width  : "linear",
					height : "easeInOutExpo"
	    	    }
	    	});
	    } else {
	    	$('body, html').animate({
	    	    scrollTop : 0
	    	}, {
	    	    duration: 1000,
	    	    queue: false,
	    	    specialEasing: {
					width  : "linear",
					height : "easeInOutExpo"
	    	    }
	    	});
	    }
	  });
	});

	$('.md-trigger').click(function(event) {
		event.preventDefault();
	});


	// FadeOut Preloader
	$(window).load(function() {
		$('.preloader-section').fadeOut('slow', function() {
			$(this).remove();
		});
	});


	// Init Big Video in Background
	var BV = new $.BigVideo({useFlashForFirefox:false});
	BV.init();
	if (Modernizr.touch) {
	    BV.show('http://fakeimg.pl/1200x900/F54F36/FFF/?text=large+image');
	} else {
	    BV.show('http://vjs.zencdn.net/v/oceans.mp4',{ambient:true, altSource:'http://vjs.zencdn.net/v/oceans.mp4'});
	}

	// Add PrettyPhoto to Links with Rel
	$("a[rel^='prettyPhoto']").prettyPhoto({
		theme: 'light_square'
	});

	// Fade Top Section on MouseMove Function
	var timeout = null,
	    topImage = $('#top-image');

	topImage.on('mousemove', function() {
	    if (timeout !== null) {
	         topImage.find('.top-main-content').fadeIn('slow');
	         topImage.find('.overlay-mask').fadeIn('slow');
	        clearTimeout(timeout);
	    }

	    timeout = setTimeout(function() {
	        topImage.find('.top-main-content').fadeOut('slow');
	        topImage.find('.overlay-mask').fadeOut('slow');
	    }, 1000);
	});
	

	// Scrolling Page Effect - Menu
	$('#nav-menu li a[href^="#"], .top-main-content a, .explore').on('click', function(e) {
	    e.preventDefault();
	    var aniLocation = $(this).attr('href');
	    if (aniLocation != '#') {
	    	$('body, html').animate({
	    	    scrollTop : $(aniLocation).offset().top - 43
	    	}, {
	    	    duration: 1000,
	    	    queue: false,
	    	    specialEasing: {
					width  : "linear",
					height : "easeInOutExpo"
	    	    }
	    	});
	    } else {
	    	$('body, html').animate({
	    	    scrollTop : 0
	    	}, {
	    	    duration: 1000,
	    	    queue: false,
	    	    specialEasing: {
					width  : "linear",
					height : "easeInOutExpo"
	    	    }
	    	});
	    }
	});

	// Mockups Slider Init
	$('#mockups').bxSlider({
		minSlides  : 1,
		maxSlides  : 3,
		moveSlides : 3,
		slideWidth : 320,
		pager      : false,
		useCSS : false
	});

	// Parallax Slides Init
	$('.parallax-slides').bxSlider({
		controls       : false,
		adaptiveHeight : true,
		infiniteLoop : false,
		hideControlOnEnd : true
	});

	// Twitter Feed Init
	$('.feed').twittie();

	$(window).load(function() {
		setTimeout(function() {
			$('.feed ul').bxSlider({
				controls       : false,
				adaptiveHeight : true,
				infiniteLoop : false,
				hideControlOnEnd : true
			});
		}, 2000);
	});

	

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


	// Photostack Polaroid Gallery
	new Photostack( document.getElementById( 'section-gallery' ), {
		callback : function( item ) {
			//console.log(item)
		}
	} );

	// ScrollTop Button
	$('.go-top').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});




	/*----------------------------------------------------*/
	/* MOBILE AND TABLET DETECT FUNCTION
	/*----------------------------------------------------*/

	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
		    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	function parallaxInit() {
		var testMobile = isMobile.any();
		if (testMobile == null) {
			$(".parallax-lines").parallax("50%", 0.2);
			$(".parallax-slider").parallax("50%", 0.2);
			$(".parallax-squares").parallax("50%", 0.2);
			$(".parallax-twitter").parallax("50%", 0.2);
			$(".parallax-contact").parallax("50%", 0.2);

			// Waypoint Effect
			$('.waypoint-element').css('opacity', 0);
			
			$('.waypoint-element').waypoint(function() {
			  $(this).addClass('fadeInUp animated');
			}, { offset: '60%' });

		}
	}

	$(window).bind("load", function() {
	    parallaxInit()
	});


	// Mobile portfolio Categories
	$('.mobile-filters, #filters li a').click(function(event) {
		$('#filters').slideToggle();
	});


	

})(jQuery);