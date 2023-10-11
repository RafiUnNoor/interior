
$(document).ready(function(){

    $("#myRange").on("input", function(e) {
        $("#demo").css("width", e.target.value + "px");
    });


    $("#myColor").on("input", function() {
        var colorValue = $(this).val();
        $("#demo").css("background-color", colorValue);
    });

    $("#living-button").on( "click", function( event ) {
      event.preventDefault();
      $( "#living-room").toggle();
    });


    $("#bedroom-button").on( "click", function( event ) {
      event.preventDefault();
      $( "#bed-room").toggle();
    });


    $("#tvroom-button").on( "click", function( event ) {
      event.preventDefault();
      $( "#tv-wall").toggle();
    });




    //Other selection

    $("#plantCanvas").on( "click", function( event ) {
        event.preventDefault();
        $( "#plantation").toggle();
      });
    $("#catBtn").on( "click", function( event ) {
        event.preventDefault();
        $( "#cat").toggle();
      });

//Other selection ends

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
    });
//lamp selection ends

//sofa selection starts
$( "#sofa1" ).on( "click", function( event ) {
    event.preventDefault();
    var sofa2 = $("#sofaTwo");
    var sofa3 = $("#sofaThree");
    var sofa4 = $("#sofaFour");
    var sofa1 = $("#sofaOne");
    
    if (sofa2.css("display") === "none" && sofa4.css("display") === "none" && sofa3.css("display") === "none" ) {
          sofa1.toggle() ;
    } else {
        alert("You can choose only one type of sofa");
    }
  });

$( "#sofa2" ).on( "click", function( event ) {
    event.preventDefault();
    var sofa1 = $("#sofaOne");
    var sofa3 = $("#sofaThree");
    var sofa4 = $("#sofaFour");
    var sofa2 = $("#sofaTwo");
    
    if (sofa1.css("display") === "none" && sofa4.css("display") === "none" && sofa3.css("display") === "none" ) {
          sofa2.toggle() ;
    } else {
        alert("You can choose only one type of sofa");
    }
  });

$( "#sofa3" ).on( "click", function( event ) {
    event.preventDefault();
    var sofa2 = $("#sofaTwo");
    var sofa1 = $("#sofaOne");
    var sofa4 = $("#sofaFour");
    var sofa3 = $("#sofaThree");
    
    if (sofa2.css("display") === "none" && sofa4.css("display") === "none" && sofa1.css("display") === "none" ) {
          sofa3.toggle() ;
    } else {
        alert("You can choose only one type of sofa");
    }
  });

$( "#sofa4" ).on( "click", function( event ) {
    event.preventDefault();
    var sofa2 = $("#sofaTwo");
    var sofa3 = $("#sofaThree");
    var sofa1 = $("#sofaOne");
    var sofa4 = $("#sofaFour");
    
    if (sofa2.css("display") === "none" && sofa1.css("display") === "none" && sofa3.css("display") === "none" ) {
          sofa4.toggle() ;
    } else {
        alert("You can choose only one type of sofa");
    }
  });
//sofa selection ends


//center table selection starts
$( "#ct1" ).on( "click", function( event ) {
    event.preventDefault();
    var ct2 = $("#ctTwo");
    var ct3 = $("#ctThree");
    var ct4 = $("#ctFour");
    var ct1 = $("#ctOne");
    
    if (ct2.css("display") === "none" && ct4.css("display") === "none" && ct3.css("display") === "none" ) {
          ct1.toggle() ;
    } else {
        alert("You can choose only one type of center table");
    }
  });

$( "#ct2" ).on( "click", function( event ) {
    event.preventDefault();
    var ct2 = $("#ctTwo");
    var ct3 = $("#ctThree");
    var ct4 = $("#ctFour");
    var ct1 = $("#ctOne");
    
    if (ct1.css("display") === "none" && ct4.css("display") === "none" && ct3.css("display") === "none" ) {
          ct2.toggle() ;
    } else {
        alert("You can choose only one type of center table");
    }
  });

$( "#ct3" ).on( "click", function( event ) {
    event.preventDefault();
    var ct2 = $("#ctTwo");
    var ct3 = $("#ctThree");
    var ct4 = $("#ctFour");
    var ct1 = $("#ctOne");
    
    if (ct2.css("display") === "none" && ct4.css("display") === "none" && ct1.css("display") === "none" ) {
          ct3.toggle() ;
    } else {
        alert("You can choose only one type of center table");
    }
  });

$( "#ct4" ).on( "click", function( event ) {
    event.preventDefault();
    var ct2 = $("#ctTwo");
    var ct3 = $("#ctThree");
    var ct4 = $("#ctFour");
    var ct1 = $("#ctOne");
    
    if (ct2.css("display") === "none" && ct1.css("display") === "none" && ct3.css("display") === "none" ) {
          ct4.toggle() ;
    } else {
        alert("You can choose only one type of center table");
    }
  });
//center table selection ends


//book shelf selection starts

$( "#bc1" ).on( "click", function( event ) {
    event.preventDefault();
    var bc2 = $("#bcTwo");
    var bc3 = $("#bcThree");
    var bc1 = $("#bcOne");
    
    if (bc2.css("display") === "none" && bc3.css("display") === "none"  ) {
          bc1.toggle() ;
    } else {
        alert("You can choose only one type of book cabinet");
    }
  });
$( "#bc2" ).on( "click", function( event ) {
    event.preventDefault();
    var bc2 = $("#bcTwo");
    var bc3 = $("#bcThree");
    var bc1 = $("#bcOne");
    
    if (bc1.css("display") === "none" && bc3.css("display") === "none"  ) {
          bc2.toggle() ;
    } else {
        alert("You can choose only one type of book cabinet");
    }
  });
$( "#bc3" ).on( "click", function( event ) {
    event.preventDefault();
    var bc2 = $("#bcTwo");
    var bc3 = $("#bcThree");
    var bc1 = $("#bcOne");
    
    if (bc2.css("display") === "none" && bc1.css("display") === "none" ) {
          bc3.toggle() ;
    } else {
        alert("You can choose only one type of book cabinet");
    }
  });
$( "#bs1" ).on( "click", function( event ) {
    event.preventDefault();
    var bs2 = $("#bsTwo");
    var bs3 = $("#bsThree");
    var bs1 = $("#bsOne");
    
    if (bs2.css("display") === "none" && bs3.css("display") === "none" ) {
          bs1.toggle() ;
    } else {
        alert("You can choose only one type of book shelf");
    }
  });
$( "#bs2" ).on( "click", function( event ) {
    event.preventDefault();
    var bs2 = $("#bsTwo");
    var bs3 = $("#bsThree");
    var bs1 = $("#bsOne");
    
    if (bs1.css("display") === "none" && bs3.css("display") === "none" ) {
          bs2.toggle() ;
    } else {
        alert("You can choose only one type of book shelf");
    }
  });
$( "#bs3" ).on( "click", function( event ) {
    event.preventDefault();
    var bs2 = $("#bsTwo");
    var bs3 = $("#bsThree");
    var bs1 = $("#bsOne");
    
    if (bs1.css("display") === "none" && bs2.css("display") === "none" ) {
          bs3.toggle() ;
    } else {
        alert("You can choose only one type of book shelf");
    }
  });
//book shelf selection ends

//clock selection starts

$( "#clock1" ).on( "click", function( event ) {
  event.preventDefault();
  var clock1 = $("#clockOne");
  var clock2 = $("#clockTwo");
  
  if (clock2.css("display") === "none") {
        clock1.toggle() ;
  } else {
      alert("You can choose only one type of clock");
  }
});

$( "#clock2" ).on( "click", function( event ) {
  event.preventDefault();
  var clock1 = $("#clockOne");
  var clock2 = $("#clockTwo");
  
  if (clock1.css("display") === "none") {
        clock2.toggle() ;
  } else {
      alert("You can choose only one type of clock");
  }
});

//clock selection ends


//Bedroom Starts

//bed selection starts
$( "#bed1" ).on( "click", function( event ) {
  event.preventDefault();
  var bed2 = $("#bedTwo");
  var bed3 = $("#bedThree");
  var bed4 = $("#bedFour");
  var bed1 = $("#bedOne");
  
  if (bed2.css("display") === "none" && bed4.css("display") === "none" && bed3.css("display") === "none" ) {
        bed1.toggle() ;
  } else {
      alert("You can choose only one type of sofa");
  }
});

$( "#bed2" ).on( "click", function( event ) {
  event.preventDefault();
  var bed2 = $("#bedTwo");
  var bed3 = $("#bedThree");
  var bed4 = $("#bedFour");
  var bed1 = $("#bedOne");
  
  if (bed1.css("display") === "none" && bed4.css("display") === "none" && bed3.css("display") === "none" ) {
        bed2.toggle() ;
  } else {
      alert("You can choose only one type of sofa");
  }
});

$( "#bed3" ).on( "click", function( event ) {
  event.preventDefault();
  var bed2 = $("#bedTwo");
  var bed3 = $("#bedThree");
  var bed4 = $("#bedFour");
  var bed1 = $("#bedOne");
  
  if (bed2.css("display") === "none" && bed4.css("display") === "none" && bed1.css("display") === "none" ) {
        bed3.toggle() ;
  } else {
      alert("You can choose only one type of sofa");
  }
});

$( "#bed4" ).on( "click", function( event ) {
  event.preventDefault();
  var bed2 = $("#bedTwo");
  var bed3 = $("#bedThree");
  var bed4 = $("#bedFour");
  var bed1 = $("#bedOne");
  
  if (bed2.css("display") === "none" && bed1.css("display") === "none" && bed3.css("display") === "none" ) {
        bed4.toggle() ;
  } else {
      alert("You can choose only one type of sofa");
  }
});
//bed selection ends

});
