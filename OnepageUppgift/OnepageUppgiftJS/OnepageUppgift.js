$(document).ready(function() {

  $('#bildPåSida2').hide();
  $('#textPåSida2').hide();
  $('nav').show();


  var sc = $(window).scrollTop();

  if(sc<800){


    $('#bildPåSida2').fadeIn(4000);
    $('#textPåSida2').fadeIn(4000);

  }

$("#button").click(function(){


  $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);


  });




});
