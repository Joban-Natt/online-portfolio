$(document).ready(function() {

    var speedTextX = 0.05;
    var speedTextY = speedTextX*0.084/0.05;
    var speedRect = speedTextY*2;
    var speedFade = 0.3;

    $(document).on('scroll', function(){
        $('h1').css("left", Math.max(28 - speedTextX*window.scrollY, 1.62) + "%");
        $('h1').css("top", Math.max(50 - speedTextY*window.scrollY, 5.9) + "%");
        $('h1').css("font-size", Math.max(500 - 0.4*window.scrollY, 300) + "%");

        $('.blueRectangle').css("height", Math.max(100 - speedRect*window.scrollY, 11.8) + "%");
        
        $('.sayScroll').css({
            bottom: Math.min(0 + speedRect*window.scrollY, 100) + "%",
            opacity: Math.max(50 - speedFade*window.scrollY, 0) + "%"
        });
        $('.arrowDown').css({
            bottom: Math.min(0 + speedRect*window.scrollY, 100) + "%",
            opacity: Math.max(50 - speedFade*window.scrollY, 0) + "%"
        });

    });

});