$(document).ready(function() {

  $('#bildPåSida2').hide();
  $('#textPåSida2').hide();
  $('nav').show();


  var sc = $(window).scrollTop();

  if(sc<800){


    $('#bildPåSida2').fadeIn(3000);
    $('#textPåSida2').fadeIn(3000);

  }

  $('#bildPåSida3').hide();
  $('#textPåSida3').hide();

  if(sc<2000){

    $('#bildPåSida3').fadeIn(6000);
    $('#textPåSida3').fadeIn(6000);

  }

$("#button").click(function(){


  $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);


  });




});
