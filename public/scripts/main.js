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
	$('.burger').click(function () {
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
// $('a[href*="#"]:not([href="#"])').click(function () {
// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// 		var target = $(this.hash);
// 		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 		if (target.length) {
// 			$('html, body').animate({
// 				scrollTop: target.offset().top
// 			}, 1000);
// 			return false;
// 		}
// 	}
// });

// other smooth scroll
// $('a[href*="#"]:not([href="#"])').click(function () {
// 	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
// 		var target = $(this.hash);
// 		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// 		if (target.length) {
// 			$('html, body').animate({
// 				scrollTop: target.offset().top - 105
// 			}, 500);
// 			return false;
// 		}
// 	}
// });

// TEST SLIDER STARTS
// ;( function( $, window, undefined ) {

// 	// 'use strict';

// 	// global
// 	var Modernizr = window.Modernizr;

// 	$.CBPContentSlider = function( options, element ) {
// 		this.$el = $( element );
// 		this._init( options );
// 	};

// 	// the options
// 	$.CBPContentSlider.defaults = {
// 		// default transition speed (ms)
// 		speed : 500,
// 		// default transition easing
// 		easing : 'ease-in-out',
// 		// current item's index
// 		current : 0
// 	};

// 	$.CBPContentSlider.prototype = {
// 		_init : function( options ) {

// 			// options
// 			this.options = $.extend( true, {}, $.CBPContentSlider.defaults, options );
// 			// the items
// 			this.$items = this.$el.find( 'ul > li' ).hide();
// 			// the tabs
// 			this.$tabs = this.$el.find( 'nav > a' );
// 			// total tabs
// 			var tabsCount = this.$tabs.length;
// 			// set each tab width
// 			this.$tabs.css( 'width', 100 / tabsCount + '%' );
// 			// current and old item's index
// 			this.current = this.options.current;
// 			this.old = 0;
// 			// check if the items are currently moving
// 			this.isAnimating = false;
// 			// support for CSS Transitions
// 			this.support = Modernizr.csstransitions;
// 			// transition end event name
// 			var transEndEventNames = {
// 				'WebkitTransition' : 'webkitTransitionEnd',
// 				'MozTransition' : 'transitionend',
// 				'OTransition' : 'oTransitionEnd',
// 				'msTransition' : 'MSTransitionEnd',
// 				'transition' : 'transitionend'
// 			};
// 			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.cbpContentSlider';
// 			// set the transition to the items
// 			if( this.support ) {
// 				this.$items.css( 'transition', 'left ' + this.options.speed + 'ms ' + this.options.easing );
// 			}
// 			// update current tab
// 			this._updateTabs();
// 			// show current item
// 			this.$items.eq( this.current ).show();
// 			// initialize/bind the events to the tabs
// 			this._initEvents();

// 		},
// 		_updateTabs : function() {
// 			this.$tabs.eq( this.old ).removeClass( 'rc-active' ).end().eq( this.current ).addClass( 'rc-active' );
// 		},
// 		_initEvents : function() {

// 			var self = this;
// 			this.$tabs.on( 'click.cbpContentSlider', function( event ) {

// 				var idx = $( this ).index();

// 				if( idx !== self.current && !self.isAnimating ) {

// 					self.isAnimating = true;

// 					var direction = idx > self.current ? 'right' : 'left',
// 						$oldItem = self.$items.eq( self.current ),
// 						$newItem = self.$items.eq( idx );

// 					// update current and old value
// 					self.old = self.current;
// 					self.current = idx;

// 					// apply initial style..
// 					if( self.support ) {
// 						// translate might be more efficient here. Left out because of a rounding and rendering problem in Chrome (Version 24.0.1312.52)
// 						$newItem.css( 'left', direction === 'right' ? '100%' : '-100%' );
// 					}
// 					$newItem.show();

// 					// ..and bind the transitionend event
// 					var transitionendfn = function() {
// 						$oldItem.off( self.transEndEventName ).hide();
// 						self.isAnimating = false;
// 					};

// 					if( self.support ) {
// 						$oldItem.on( self.transEndEventName, transitionendfn );
// 					}
// 					else {
// 						transitionendfn.call();
// 					}

// 					// apply final style
// 					if( self.support ) {
// 						setTimeout( function() {
// 							// translate might be more efficient here. Left out because of a rounding and rendering problem in Chrome (Version 24.0.1312.52)
// 							$oldItem.css( 'left', direction === 'right' ? '-100%' : '100%' );
// 							$newItem.css( 'left', '0%' );
// 						}, 25 );
// 					}

// 					// update current tab
// 					self._updateTabs();

// 				}

// 				event.preventDefault();

// 			} );

// 		},
// 		destroy : function() {
// 			if( this.support ) {
// 				this.$items.css( 'transition', 'none' );
// 			}
// 			this.$items.css( 'left', 0 ).show();
// 			this.$tabs.off( '.cbpContentSlider' ).removeClass( 'rc-active' );
// 		}
// 	};

// 	var logError = function( message ) {
// 		if ( window.console ) {
// 			window.console.error( message );
// 		}
// 	};

// 	$.fn.cbpContentSlider = function( options ) {
// 		if ( typeof options === 'string' ) {
// 			var args = Array.prototype.slice.call( arguments, 1 );
// 			this.each(function() {
// 				var instance = $.data( this, 'cbpContentSlider' );
// 				if ( !instance ) {
// 					logError( "cannot call methods on cbpContentSlider prior to initialization; " +
// 					"attempted to call method '" + options + "'" );
// 					return;
// 				}
// 				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
// 					logError( "no such method '" + options + "' for cbpContentSlider instance" );
// 					return;
// 				}
// 				instance[ options ].apply( instance, args );
// 			});
// 		} 
// 		else {
// 			this.each(function() {	
// 				var instance = $.data( this, 'cbpContentSlider' );
// 				if ( instance ) {
// 					instance._init();
// 				}
// 				else {
// 					instance = $.data( this, 'cbpContentSlider', new $.CBPContentSlider( options, this ) );
// 				}
// 			});
// 		}
// 		return this;
// 	};

// } )( jQuery, window );
// TEST SLIDER ENDS


// MORE TEST SLIDER STARTS
// (function(c,b,e){var d=b.Modernizr;c.CBPContentSlider=function(f,g){this.$el=c(g);this._init(f)};c.CBPContentSlider.defaults={speed:500,easing:"ease-in-out",current:0};c.CBPContentSlider.prototype={_init:function(f){this.options=c.extend(true,{},c.CBPContentSlider.defaults,f);this.$items=this.$el.find("ul > li").hide();this.$tabs=this.$el.find("nav > a");var h=this.$tabs.length;this.$tabs.css("width",100/h+"%");this.current=this.options.current;this.old=0;this.isAnimating=false;this.support=d.csstransitions;var g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"};this.transEndEventName=g[d.prefixed("transition")]+".cbpContentSlider";if(this.support){this.$items.css("transition","left "+this.options.speed+"ms "+this.options.easing)}this._updateTabs();this.$items.eq(this.current).show();this._initEvents()},_updateTabs:function(){this.$tabs.eq(this.old).removeClass("rc-active").end().eq(this.current).addClass("rc-active")},_initEvents:function(){var f=this;this.$tabs.on("click.cbpContentSlider",function(k){var g=c(this).index();if(g!==f.current&&!f.isAnimating){f.isAnimating=true;var l=g>f.current?"right":"left",j=f.$items.eq(f.current),h=f.$items.eq(g);f.old=f.current;f.current=g;if(f.support){h.css("left",l==="right"?"100%":"-100%")}h.show();var i=function(){j.off(f.transEndEventName).hide();f.isAnimating=false};if(f.support){j.on(f.transEndEventName,i)}else{i.call()}if(f.support){setTimeout(function(){j.css("left",l==="right"?"-100%":"100%");h.css("left","0%")},25)}f._updateTabs()}k.preventDefault()})},destroy:function(){if(this.support){this.$items.css("transition","none")}this.$items.css("left",0).show();this.$tabs.off(".cbpContentSlider").removeClass("rc-active")}};var a=function(f){if(b.console){b.console.error(f)}};c.fn.cbpContentSlider=function(g){if(typeof g==="string"){var f=Array.prototype.slice.call(arguments,1);this.each(function(){var h=c.data(this,"cbpContentSlider");if(!h){a("cannot call methods on cbpContentSlider prior to initialization; attempted to call method '"+g+"'");return}if(!c.isFunction(h[g])||g.charAt(0)==="_"){a("no such method '"+g+"' for cbpContentSlider instance");return}h[g].apply(h,f)})}else{this.each(function(){var h=c.data(this,"cbpContentSlider");if(h){h._init()}else{h=c.data(this,"cbpContentSlider",new c.CBPContentSlider(g,this))}})}return this}})(jQuery,window);

// MORE TEST SLIDER ENDS

App.init = function () {
	App.events();
}; //end of init();

$(function () {
	App.init();
});