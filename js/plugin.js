/*$global $ , alert , console */

$(document).ready(function () {
  'use strict';

  // Adjust the Header Height
  var myHeader = $('.header'),

      mySlider = $('.bxslider');

    myHeader.height($(window).height());
  
  $(window).resize(function() {

    myHeader.height($(window).height());

    // Adjust Bxslider List Item Center
    mySlider.each(function () {
      $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });

  });

  // Links Add Active Class
  $('.links li a').click(function() {

    $(this).parent().addClass("active").siblings().removeClass("active");

  });

  // Adjust Bxslider List Item Center
  mySlider.each(function () {
    $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
  });

  // Trigger the BxSlider 
  mySlider.bxSlider({
    pager: false 
  });

  // Start Smooth Scroll 
  $(".links li a").on("click",function () {

    $('html , body').animate({

      scrollTop: $($(this).data("value")).offset().top

    } , 1000);

  });

  // Our Auto Slider Code
  (function autoSlider() {

    $('.slider .active').each(function () {

      if(!$(this).is(':last-child')) {

        $(this).delay(3000).fadeOut(1000 , function () {

          $(this).removeClass('active').next().addClass('active').fadeIn();

          autoSlider();

        });

      } else {

        $(this).delay(3000).fadeOut(1000 , function () {

          $(this).removeClass('active');

          $('.slider div').eq(0).addClass('active').fadeIn();

          autoSlider();

        });

      }

    });

  }());

  // Trigger Nice Scroll
  $("html").niceScroll({
    cursorcolor: "#00baf3",
    cursorwidth: "10px",
    cursorborder: "1px solid #00baf3" 
  });

});