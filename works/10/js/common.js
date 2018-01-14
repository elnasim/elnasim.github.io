$(function () {

  $('a.anchor-easy').bind('click', function (e) {
    e.preventDefault();
    var anchor = jQuery(this).attr('href');
    $('html, body').animate({scrollTop: $(anchor).offset().top}, 1050);
  });

  $(".toggle-mnu").click(function () {
    $(this).toggleClass("on");
    $(".mobile-menu").slideToggle();
    return false;
  });

  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function (element) {
        return element.find('img');
      }
    }

  });

});
