$(document).ready(function() {

  $("#toTopKnapp").show();

  $("#toTopKnapp").click(function(){


    $('html, body').animate({
          scrollTop: $("header").offset().top
      }, 2000);

  });

});
