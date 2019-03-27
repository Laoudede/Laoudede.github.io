/*$('#bildPåSida2').hidden();
$('#textPåSida2').hidden();*/

$("#button").click(function(){


  $('html, body').animate({
        scrollTop: $("header").offset().top
    }, 2000);



});

/*if($(window).scrollTop()>1080){


  $('#bildPåSida2').fadeIn(5000, function());
  $('#textPåSida2').fadeIn(5000, function());


}*/
