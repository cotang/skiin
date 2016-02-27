jQuery(document).ready(function($) {
  'use strict';
  var $masonryContainer = $('.masonry');

  $masonryContainer.masonry({
    columnWidth: '.masonry__column',
    // gutter: '.masonry__gutter',
    itemSelector: '.masonry__item'
  });


	var $aside = $('aside');

	$('#hamburger').on('click',function(e) {
	    e.preventDefault();	
	    $aside.animate({
	    	right: parseInt($aside.css('right'),10) == 0 ? -$aside.outerWidth() : 0,
	    },{
	    	duration: 1500,
	    	easing: 'easeOutQuint'
	    });
	});
	$('#page-sidebar__close').on('click',function(e) {
	    e.preventDefault();	
	    $aside.animate({
	    	right: -$aside.outerWidth(),
	    },{
	    	duration: 1500,
	    	easing: 'easeOutQuint'
	    });
	});


$('#mainGallery').slick({
  arrows: true,
  appendArrows: $('#mainGalleryTabs'),  
  dots: true,
  appendDots: $('#mainGalleryTabs'),  
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,  
  centerMode: true,   
  centerPadding: '0px',
  variableWidth: true, 
  slidesToShow: 2
});



$('#thirdGallery').slick({
  arrows: true,
  appendArrows: $('#thirdGalleryTabs'),  
  dots: true,
  appendDots: $('#thirdGalleryTabs'),  
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,  
  slidesToShow: 1
});








});