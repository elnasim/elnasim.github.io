$(document).ready(function () {

  // -----------------------------------------------
  // Slick
  // -----------------------------------------------

  $('.carousel').slick({
    slidesToShow: 3,
    swipeToSlide: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


});