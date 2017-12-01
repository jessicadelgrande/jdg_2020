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

App.init = function () {
	App.events();
}; //end of init();

$(function () {
	App.init();
});