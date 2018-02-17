$(function() {
	$('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 900, 'linear');
	});
});
$(window).scroll(function() {
  if ($(document).scrollTop() > 400) {
    $('header').addClass('shrink');
  } else {
    $('header').removeClass('shrink');
  }
});

//NOTE:pop-Up
$('#contact-form').on('click', function(event){
  event.preventDefault();
   $('.contenedor_con').addClass('is-visible');
     document.getElementById("mySidenav").style.width = "0";
});
$('#contact-cls').on('click', function(event){
  event.preventDefault();
  $('.contenedor_con').removeClass('is-visible');
});
$(document).keyup(function(event){
  if(event.which=='27'){
    $('.contenedor_con').removeClass('is-visible');
  }
});

//scrollTop
$(window).scroll(function() {
  /*if ($(document).scrollTop() > 150) {
    $(".logofixed").css({
      "opacity":"1","-moz-transition":"opacity 5000ms linear", "-o-transition":"opacity 500ms linear", "-ms-transition":"background-color 500ms linear",
      "transition":"opacity 500ms linear"
    },3000);


  } else {
    $(".logofixed").css({
      "opacity":"1","-moz-transition":"opacity 5000ms linear", "-o-transition":"opacity 500ms linear", "-ms-transition":"background-color 500ms linear",
      "transition":"opacity 500ms linear"
    },3000);
  }*/

  if ($(document).scrollTop() > 400) {
		$("header").css({
			"background-color":"white",
			"border-bottom":"1px solid #e3e3e3",
		  "-webkit-transition": "all 0.02s",
		  "-moz-transition": "all 0.02s",
		  "transition": "all 0.02s"
		},3000);
    $(".logofixed").css({
      "color":"#000000"
    });
    $(".icon-o").css({
      "color":"#000000"
    });
  } else {
		$("header").css({
			"background-color":"transparent",
			"border-bottom":"1px solid transparent",
		  "-webkit-transition": "all 0.02s",
		  "-moz-transition": "all 0.02s",
		  "transition": "all 0.02s"
		},3000);
    $(".logofixed").css({
      "color":"#ffffff"
    },500);
    $(".icon-o").css({
      "color":"#ffffff"
    });
  }

});
