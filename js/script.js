jQuery(function($) {
	"use strict";

//Mobile menu
  $('.menu__btn').click(function() {
    $('.menu').toggleClass('menu--opened');
    $('.menu__list').slideToggle();
  });
  
//scroll to arrow anchors
  $(".promo__link").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });

});