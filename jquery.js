/* TEXT ON IMAGE */

$(document).ready(function(){
    $(".car1,.text-car1,.text-click-car1").mouseover(function(){
        $(".text-car1,.text-click-car1").css("visibility","visible");
        $(".car1").css("filter","brightness(50%)")
    });
    $(".car1,.text-car1,.text-click-car1").mouseout(function(){
        $(".text-car1,.text-click-car1").css("visibility","hidden");
        $(".car1").css("filter","brightness(100%)")
    });
    $(".car2,.text-car2,.text-click-car2").mouseover(function(){
        $(".text-car2,.text-click-car2").css("visibility","visible");
        $(".car2").css("filter","brightness(50%)")
    });
    $(".car2,.text-car2,.text-click-car2").mouseout(function(){
        $(".text-car2,.text-click-car2").css("visibility","hidden");
        $(".car2").css("filter","brightness(100%)")
    });
    $(".car3,.text-car3,.text-click-car3").mouseover(function(){
        $(".text-car3,.text-click-car3").css("visibility","visible");
        $(".car3").css("filter","brightness(50%)")
    });
    $(".car3,.text-car3,.text-click-car3").mouseout(function(){
        $(".text-car3,.text-click-car3").css("visibility","hidden");
        $(".car3").css("filter","brightness(100%)")
    });
    $(".car4,.text-car4,.text-click-car4").mouseover(function(){
        $(".text-car4,.text-click-car4").css("visibility","visible");
        $(".car4").css("filter","brightness(50%)")
    });
    $(".car4,.text-car4,.text-click-car4").mouseout(function(){
        $(".text-car4,.text-click-car4").css("visibility","hidden");
        $(".car4").css("filter","brightness(100%)")
    });
});

/* TEXT ON IMAGE */


var body = $("html, body");
body.stop().animate({scrollTop:0}, 500, 'swing');


$(document).ready(function (){
    $("button, .car-link").click(function (){
        $('html, body').animate({
            scrollTop: $(".car1").offset().top - 120
        }, 900);
    });
    $(".logo").click(function (){
        $('html, body').animate({
            scrollTop: $(".car1").offset().top - 1200
        }, 900);
    });
    $(".social-link").click(function (){
        $('html, body').animate({
            scrollTop: $(".car1").offset().top + 3500
        }, 900);
    });
    $(".car1,.text-car1,.text-click-car1").click(function (){
        $('html, body').animate({
            scrollTop: $(".info-car1").offset().top - 150
        }, 900);
    });
    $(".car2,.text-car2,.text-click-car2").click(function (){
        $('html, body').animate({
            scrollTop: $(".info-car2").offset().top - 150
        }, 900);
    });
    $(".car3,.text-car3,.text-click-car3").click(function (){
        $('html, body').animate({
            scrollTop: $(".info-car3").offset().top - 150
        }, 900);
    });
    $(".car4,.text-car4,.text-click-car4").click(function (){
        $('html, body').animate({
            scrollTop: $(".info-car4").offset().top - 150
        }, 900);
    });
});