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


    $('.related-carousel').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.related-carousel__nav',
        prevArrow: '<button type="button" class="related-carousel-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="related-carousel-next"><i class="fa fa-angle-right"></i></button>'
    });
});
