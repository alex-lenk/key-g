$(document).ready(function () {
    var posSliderBig = '.post-slider__big';
    var posSliderNav = '.post-slider__nav';

    $(posSliderBig).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: posSliderNav
    });
    $(posSliderNav).slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: posSliderBig,
        focusOnSelect: true
    });

    /*$('.rtcl-slider-item img').zoom();*/
});