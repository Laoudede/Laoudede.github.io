$(document).ready(function() {
  $("#toTopKnapp").click(function(){


    $('html, body').animate({
          scrollTop: $("header").offset().top
      }, 2000);

  });

});
