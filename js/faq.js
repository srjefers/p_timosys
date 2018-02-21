$(window).scroll(function() {
  if ($(document).scrollTop() > 400) {
    $('header').addClass('shrink');
  } else {
    $('header').removeClass('shrink');
  }
});
$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle();
  });
});