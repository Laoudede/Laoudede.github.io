
$(document).ready(function() {

  $("#phone").keyup(function(){

		var reNum = /^[0]{1}[0-9]{6,15}$/;

    var OK = reNum.exec($('#phone').val());

  			if (!OK) {
  				$('#phonetext').text("Felaktig inmatning");

  			}
  			else{

  				$('#phonetext').text("ok");

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

    			}
    			else{

    				$('#förnamntext').text("ok");

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

      			}
      			else{

      				$('#efternamntext').text("ok");

      			}

      			if ($('#efternamn').val().length===0){
      				$('#efternamntext').text("");

      			}
      		});


        $("#mailAdress").keyup(function(){

          var reMail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          var OK = reMail.exec($('#mailAdress').val());

        			if (!OK) {
        				$('#mailtext').text("Felaktig inmatning");

        			}
        			else{

        				$('#mailtext').text("ok");

        			}

        			if ($('#mailAdress').val().length===0){
        				$('#mailtext').text("");

        			}
        		});


        	});
