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

	// SCROLL REVEAL
	window.sr = ScrollReveal();
	sr.reveal('.revealing', { duration: 2000 });
	new WOW().init();
});

// display nav items on scroll
$(window).scroll(function () {
	if ($(window).scrollTop() > 680) {
		$(".navContainer").css("display", "block");
		$(".navContainer").fadeIn(400);
	} else {
		// $(".topNav").fadeOut(400);
		$(".navContainer").css("display", "none")
	}
});

// display sidebars on scroll
$(window).scroll(function () {
	if ($(window).scrollTop() > 680) {
		$(".nameContainer").css("display", "block");
		$(".nameContainer").fadeIn(800);
	} else {
		$(".nameContainer").css("display", "none");
		$(".nameContainer").fadeOut(800);
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




App.init = () => {
	App.events();
} //end of init();

$(function() {
	App.init();
});
