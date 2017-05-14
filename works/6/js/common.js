$(function() {

	//toggle-menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-menu").slideToggle();
		return false;
	});

	//magnific-popup
	$('.s-9__popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

	//ajax send form
	$("body").append('<div class="thx">Спасибо за заявку!</div>');

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".thx").addClass("thx-active");
			$.magnificPopup.close();
			setTimeout(function() { $(".thx").removeClass("thx-active"); }, 2000);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//прокрутка
	slowScroll = function(id){
		var offset = 0;
		$('html, body').animate({scrollTop: $(id).offset().top - offset}, 1500);
		return false;
	};

	
});
