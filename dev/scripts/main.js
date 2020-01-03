'use strict';

$(document).ready(function () {
	// hamburger menu
	$('.burgerWrapper').click(function (e) {

		//toggle header nav links
		e.stopPropagation();
		// $('.navContainer').toggleClass('show');
		$('.navBoxContainer').toggleClass('show slideFromTop');
		$('.topNav').toggleClass('slideFromTop');
		$('.navBox').toggleClass('slideFromTop');
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


App.init = () => {
	App.events();
} //end of init();

$(function() {
	App.init();
});
