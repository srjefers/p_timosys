$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('header').addClass('shrink');
  } else {
    $('header').removeClass('shrink');
  }
});
$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 900, 'linear');
	});
});
