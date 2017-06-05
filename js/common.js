$(function() {

	slowScroll = function(id){
		var offset = 0;
		$('html, body').animate({scrollTop: $(id).offset().top - offset}, 1500);
		return false;
	};


	$(window).scroll(function(){
		checkSection();
	});

	function checkSection(){
		$('.section').each(function(){
			var
					$this = $(this),
					topEdge = $this.offset().top - 200,
					bottomEdge = topEdge + $this.height(),
					wScroll = $(window).scrollTop();
			if (topEdge < wScroll && bottomEdge > wScroll) {
					var
						currentId = $this.data('section');
						reqLink = $('.left-nav ul li a').filter('[href="#' + currentId + '"]');

					reqLink.closest('.left-nav ul li').addClass('active')
						.siblings().removeClass('active');
			}
		});
	};

});
