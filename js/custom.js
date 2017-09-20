

var testimonialFlexslider = function() {
    var $flexslider = $('.flexslider');
    $flexslider.flexslider({
        animation: "fade",
        manualControls: ".flex-control-nav li",
        directionNav: false,
        smoothHeight: true,
        useCSS: false /* Chrome fix*/
    });
}


var prev = 0;
var $window = $(window);
var nav = $('.navbar');

$window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
});
