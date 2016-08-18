$(document).ready(function(){
    /*$("button").click(function(){
        $("#span1").text($(window).height());
        $("#span2").text($(document).height());
    });*/
    var headerHeight = 200;
    var windowHeight = $(window).height();
    var headerPosition = $(window).height()-headerHeight;
    $("#header").css('position', 'relative');
    $("#header").css('top', headerPosition);
   /*$("#header").css('top', windowHeight*.25);*/
    
   $(window).on('load resize', function(){
    var windowHeight = $(window).height();
    var headerPosition = $(window).height()-headerHeight;
    $("#header").css('position', 'relative');
    /*this could work but is it better than just using headerPosition?*/
    /*$("#header").css('top', function(){return $(window).height() * 0.25});*/
    $("#header").css('top', headerPosition);
    /*$("#header").css('top', windowHeight*.25);*/
    });
});

$(document).ready(function(){
  $("#header").css('background-color', 'blue !important');
});


