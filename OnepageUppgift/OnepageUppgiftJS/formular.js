
$(document).ready(function() {

  $("#phone").keyup(function(){

		var reNum = /^[0]{1}[0-9]{6,15}$/;

    var OK = reNum.exec($('#phone').val());

  			if (!OK) {
  				$('#phonetext').text("Felaktig inmatning");
          $('#phone').css("color", "red");

  			}
  			else{

  				$('#phonetext').text("ok");
          $('#phone').css("color", "green");
  			}

  			if ($('#phone').val().length===0){
  				$('#phonetext').text("");

  			}
  		});


    $("#förnamn").keyup(function(){

  		var reFör = /[a-z]{1,10}/;

      var OK = reFör.exec($('#förnamn').val());

    			if (!OK) {
    				$('#förnamntext').text("Felaktig inmatning");
            $('#förnamn').css("color", "red");

    			}
    			else{

    				$('#förnamntext').text("ok");
            $('#förnamn').css("color", "green");

    			}

    			if ($('#förnamn').val().length===0){
    				$('#förnamntext').text("");

    			}
    		});


      $("#efternamn").keyup(function(){

    		var reEfter = /[a-z]{1,10}/;

        var OK = reEfter.exec($('#efternamn').val());

      			if (!OK) {
      				$('#efternamntext').text("Felaktig inmatning");
              $('#efternamn').css("color", "red");

      			}
      			else{

      				$('#efternamntext').text("ok");
              $('#efternamn').css("color", "green");

      			}

      			if ($('#efternamn').val().length===0){
      				$('#efternamntext').text("");

      			}
      		});


        $("#mailAdress").keyup(function(){

          var reMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          var OK = reMail.exec($('#mailAdress').val());

        			if (!OK) {
        				$('#mailtext').text("Ofullständig inmatning");
                $('#mailAdress').css("color", "red");

        			}
        			else{

        				$('#mailtext').text("ok");
                $('#mailAdress').css("color", "green");

        			}

        			if ($('#mailAdress').val().length===0){
        				$('#mailtext').text("");

        			}
        		});


        	});
