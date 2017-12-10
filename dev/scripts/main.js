'use strict';

$(document).ready(function () {
	// hamburger menu
	$('.burgerWrapper').click(function (e) {

		//toggle header nav links
		e.stopPropagation();
		$('.navContainer').toggleClass('show');
		$('.navBoxContainer').toggleClass('show');
	});

	// animate burger to X shape
	$('.burger').click(function() {
	  $(this).toggleClass('opened');
	});

	// close the menu after an item has been selected
	$('.navBox a').click(function () {
		if ($('.navBoxContainer').hasClass('show')) {
			$('.burgerWrapper, .navBoxContainer, .burger').removeClass('opened show');
		};
	});

	// close the menu when clicking anywhere else on the page
	$('html').click(function () {
		if ($('.navBoxContainer').hasClass('show')) {
			$('.burgerWrapper, .navBoxContainer, .burger').removeClass('opened show');
		};
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

// Both smooth scrolls together create a really neat bounce effect that I can't get with just one. It happened by accident and I don't want to get rid of it. 
// smooth scroll
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

// other smooth scroll
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


App.init = () => {
	App.events();
} //end of init();

$(function() {
	App.init();
});
