$(document).ready(function () {

  // -----------------------------------------------
  // MOBILE MENU
  // -----------------------------------------------
  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".mobile-menu").slideToggle();
    return false;
  });

  // -----------------------------------------------
  // SLICK SLIDER
  // -----------------------------------------------
  $('.slider-top').slick({
    fade: true,
    arrows: false,
    dots: true,
    appendDots: '.slider-top-nav'
  });

  $('.carousel').slick({
    arrows: false,
    dots: true,
    appendDots: '.carousel-nav'
  });

});