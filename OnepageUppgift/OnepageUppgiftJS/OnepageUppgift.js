$(document).ready(function() {

  $('nav').show();

  $('#bildPåSida2').hide();
  $('#textPåSida2').hide();

  $('#bildPåSida3').hide();
  $('#textPåSida3').hide();

  var sc = $(window).scrollTop();

/*Var god ladda om sidan och skrolla ner direkt för att få se skriptet in action*/
    if(sc<500){

      $('#bildPåSida2').fadeIn(3000);
      $('#textPåSida2').fadeIn(3000);

    }

    if(sc<2000){

      $('#bildPåSida3').fadeIn(5000);
      $('#textPåSida3').fadeIn(5000);

    }


$("#button").click(function(){


  $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);


  });

});
