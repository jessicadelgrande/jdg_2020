'use strict';

$(document).ready(function () {
	//HAMBURGER MENU
	$('#hamburgerIcon').click(function (e) {
		//hamburgerIcon animation
		$(this).toggleClass('open');

		//toggle header nav links
		e.stopPropagation();
		$('.navLinks').toggleClass('show');
	});

	// close the menu when clicking anywhere else on the website
	$('html').click(function () {
		if ($('.navLinks').hasClass('show')) {
			$('#hamburgerIcon, .navLinks').removeClass('open show');
		};
	});

	//SMOOTH SCROLLS
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 105
				}, 500);
				return false;
			}
		}
	});

	// SCROLL REVEAL -- ABOUT, WORK 
	window.sr = ScrollReveal();
	sr.reveal('.revealing', { duration: 1500 });
});

// display nav items on scroll
$(window).scroll(function () {
	if ($(window).scrollTop() > 640) {
		$(".navContainer").css("visibility", "visible");
		$(".navContainer").fadeIn(800);
		$(".nameContainer").css("visibility", "visible");
		$(".nameContainer").fadeIn(1000);
	} else {
		$(".navContainer").css("visibility", "visible");
		$(".navContainer").fadeOut(400);
		$(".nameContainer").css("visibility", "visible");
		$(".nameContainer").fadeOut(400);
	}
});

// smooth scroll on anchor tags
$('a[href*="#"]:not([href="#"])').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
});

// BLINKING ARROW
// $(document).ready(function() {
// 	var keepGoing = document.getElementById('keepGoing');
// 	setInterval(function() {
// 		keepGoing.style.display = (keepGoing.style.display == 'none' ? '' : 'none');
// 	}, 600);

// });


App.init = () => {
	App.events();
} //end of init();

$(function() {
	App.init();
});
