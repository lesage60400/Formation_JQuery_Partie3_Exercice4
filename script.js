$(document).ready(function(){
        var haut = 10;
        $("#augmenter").click(function(){
          haut += 10;
          $('#bloc').css("height", + haut + "px");
        if (haut >= 100){
          haut = 10;
          $("#bloc").animate({height:5},400);
        }
      });
        $("#vert").click(function(){
            $("#bloc").css("background-color", "green");
        });
        $("#couleur_initiale").click(function(){
            $("#bloc").css("background-color", "black");
        });
        $("#disparition").click(function(){
            $("#bloc").hide();
        });
        $("#apparition").click(function(){
            $("#bloc").show();
          });
        });
