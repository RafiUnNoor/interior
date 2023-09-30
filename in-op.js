
$(document).ready(function(){

    $("#myRange").on("input", function(e) {
        $("#demo").css("width", e.target.value + "px");
    });


    $("#myColor").on("input", function() {
        var colorValue = $(this).val();
        $("#demo").css("background-color", colorValue);
    });

    $("#plantCanvas").on( "click", function( event ) {
        event.preventDefault();
        $( "#plantation").toggle();
      });


//lamp selection
    $( "#lamp3" ).on( "click", function( event ) {
        event.preventDefault();
        var lamp2 = $("#lampTwo");
        var lamp3 = $("#lampThree");
        var lamp1 = $("#lampOne");
        
        if (lamp2.css("display") === "none" && lamp1.css("display") === "none") {
              lamp3.toggle() ;
        } else {
            alert("You can choose only one type of lamp");
        }
      });

      $( "#lamp1" ).on( "click", function( event ) {
        event.preventDefault();
        var lamp2 = $("#lampTwo");
        var lamp3 = $("#lampThree");
        var lamp1 = $("#lampOne");
        
        if (lamp2.css("display") === "none" && lamp3.css("display") === "none") {
              lamp1.toggle() ;
        } else {
            alert("You can choose only one type of lamp");
        }
      });

      $("#lamp2").click(function(event) {
        event.preventDefault();
        var lamp2 = $("#lampTwo");
        var lamp3 = $("#lampThree");
        var lamp1 = $("#lampOne");
        
        if (lamp3.css("display") === "none" && lamp1.css("display") === "none") {
              lamp2.toggle() ;
        } else {
            alert("You can choose only one type of lamp");
        }
//lamp selection ends

//sofa selection starts

    });
});
