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

	// FadeOut Preloader
	$(window).load(function() {
		$('.preloader-section').fadeOut('slow', function() {
			$(this).remove();
		});
	});

	// Add PrettyPhoto to Links with Rel
	$("a[rel^='prettyPhoto']").prettyPhoto({
		theme: 'light_square'
	});

	// Scrolling Page Effect - Menu
	$('#nav-menu li a[href^="#"], .top-main-content a, .holder-logo > a').on('click', function(e) {
	    e.preventDefault();
	    var aniLocation = $(this).attr('href');
	    if (aniLocation != '#') {
	    	$('body, html').animate({
	    	    scrollTop : $(aniLocation).offset().top - 53
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

	// ScrollTop Button
	$('.go-top').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 600);
	    return false;
	});


	// Adding Animation to Sharing Button
	$('.full-width-wrapper').find('button').click(function(event) {
		event.preventDefault();
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

	// Photostack Polaroid Gallery
	new Photostack( document.getElementById( 'section-gallery' ), {
		callback : function( item ) {
			//console.log(item)
		}
	} );

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
			$(".parallax-counters").parallax("50%", 0.3);
			$(".parallax-our-services").parallax("50%", 0.3);
			$(".parallax-twitter").parallax("50%", 0.2);
			$(".parallax-testimonials").parallax("50%", 0.2);


			// Waypoint Animations
			$('.waypoint-element').css('opacity', 0);
			
			$('.waypoint-element').waypoint(function() {
			  $(this).addClass('fadeInUp animated');
			}, { offset: '60%' });

			$('.waypoint-mockups').waypoint(function() {
			  $(this).find('img:first-child').css('bottom', -150);
			  $(this).find('img:last-child').css('bottom', 0);
			}, { offset: '60%' });

			$('.parallax-counters').waypoint(function() {
			 	$('.counter-one').countTo({
			 	    from: 0,
			 	    to: 264,
			 	    speed: 800,
			 	    refreshInterval: 50,
			 	    onComplete: function(value) {
			 	    }
			 	});

			 	$('.counter-two').countTo({
			 	    from: 0,
			 	    to: 2338,
			 	    speed: 1200,
			 	    refreshInterval: 50,
			 	    onComplete: function(value) {
			 	    }
			 	});

			 	$('.counter-three').countTo({
			 	    from: 0,
			 	    to: 9628,
			 	    speed: 1400,
			 	    refreshInterval: 50,
			 	    onComplete: function(value) {
			 	    }
			 	});

			 	$('.counter-four').countTo({
			 	    from: 0,
			 	    to: 166,
			 	    speed: 1600,
			 	    refreshInterval: 50,
			 	    onComplete: function(value) {
			 	    }
			 	});
			}, { offset: '60%' });
		}
	}

	$(window).bind("load", function() {
	    parallaxInit();
	});



})(jQuery);