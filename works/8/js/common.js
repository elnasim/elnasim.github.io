$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden-menu").slideToggle();
		return false;
	});

});
