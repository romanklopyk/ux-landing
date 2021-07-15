// опрацьовуємо подію запуску слайдера // всього слайдів
$('.slider1').on('init', function(event, slick) {
    console.log(slick.slideCount);
    var T = slick.slideCount;
    $("#total_slides").html(T);
});

// On before slide change
$('.slider1').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    var C = slick.currentSlide;
    $("#current_slide").html(C + 1);
});

$(document).ready(function() {
    $('.slider1').slick();
});

$('#slider_next').on('click', function() {
    $('.slider1').slick('slickNext');
});

$('#slider_prev').on('click', function() {
    $('.slider1').slick('slickPrev');
});