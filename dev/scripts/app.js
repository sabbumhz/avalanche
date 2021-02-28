$(document).ready(function () {

    // Navbar Toggle
    // $('.navbar-toggle').click(function(){
    //     $(this).addClass('active');
    //     $('.mobile-navigation').addClass('active');
    // });

    // $('.close-nav').click(function(){
    //     $('.mobile-navigation').removeClass('active');
    //     $('.navbar-toggle').removeClass('active');
    // });

    //slider
    $(".slider-01").slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: 1000
    });



    // match height js
    $('.match-title').matchHeight('match-title');

});





