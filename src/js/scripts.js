$(document).ready(function () {
    /* BEGIN For post-slider  */
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
    /* END For post-slider  */


    /* BEGIN For related-carousel  */
    $('.related-carousel').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        appendArrows: '.related-carousel__nav',
        prevArrow: '<button type="button" class="related-carousel-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="related-carousel-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    /* END For related-carousel  */


    $('.menu-toggle').click(function () {
        $('body').toggleClass('open-menu')
        $('.menu').slideToggle();
    });

    $('.menu-parent__data').click(function () {
        $(this).prev().slideToggle();
        $(this).toggleClass('menu-parent__data-open');
    });
});
