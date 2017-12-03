'use strict';

var feed = new Instafeed({
		get: 'user',
		userId: 1571190663,
		accessToken: 'aec0f07c02554ff69a0bffdf2de11e20',
		target: 'instagram',
		resolution: 'standard_resolution',
		after: function() {
			var el = document.getElementById('instafeed');
			if (el.classList)
				el.classList.add('show');
			else
				el.className += ' ' + 'show';
		}
});


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

// var feed = new Instafeed({
// 	get: 'user',
// 	userId: '$instaID',
// 	clientId: '$instaKey'
// });
// feed.run();


App.init = () => {
	App.events();
} //end of init();

$(function() {
	App.init();
});
