$(document).ready(function() {

  $('#bildPåSida2').hide();
  $('#textPåSida2').hide();


  var sc = $(window).scrollTop();

  if(sc>1080){


    $('#bildPåSida2').fadeIn(5000);
    $('#textPåSida2').fadeIn(5000);


  }

$("#button").click(function(){


  $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);


  });

});
