jQuery(document).ready(function($) {
  'use strict';
  var $masonryContainer = $('.masonry');

  $masonryContainer.masonry({
    columnWidth: '.masonry__column',
    // gutter: '.masonry__gutter',
    itemSelector: '.masonry__item'
  });

});