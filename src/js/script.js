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


      // Review slick
  // if ($(window).width() > 1200) {
  //   $('.multiple-items').slick({
  //       infinite: true,
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //   });
  // }


$('#mainGallery').slick({
  arrows: true,
  appendArrows: $('#mainGalleryTabs'),  
  dots: true,
  appendDots: $('#mainGalleryTabs'),  
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,  
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
  autoplaySpeed: 4000,  
  slidesToShow: 1
});




});