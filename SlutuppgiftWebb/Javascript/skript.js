$(document).ready(function() {
  $("#button").click(function(){


    $('html, body').animate({
          scrollTop: $("header").offset().top
      }, 2000);
      
  });

});
