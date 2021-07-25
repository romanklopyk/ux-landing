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

// слайдер домашнє завдання


$(document).ready(function() {
    $('.slider2').slick({
        autoplay: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
});

// опрацьовуємо подію запуску слайдера // всього слайдів // слайдер 2!!!
$('.slider2').on('init', function(event, slick) {
    console.log(slick.slideCount);
    var T1 = slick.slideCount;
    $("#tot_slides").html(T1);
});

// On before slide change
$('.slider2').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    var C = slick.currentSlide;
    $("#cur_slide").html(C + 1);
});

$('#sl_next').on('click', function() {
    $('.slider2').slick('slickNext');
});

$('#sl_prev').on('click', function() {
    $('.slider2').slick('slickPrev');
});