/* BEGIN mobile device definition  */
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
/* END mobile device definition  */


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


    /* BEGIN Actions on opening menus on mobile devices  */
    $('.menu-toggle').click(function () {
        $('body').toggleClass('open-menu');
        $('.menu').slideToggle();
    });

    $('.menu-parent__data').click(function () {
        $(this).prev().slideToggle();
        $(this).toggleClass('menu-parent__data-open');
    });
    /* END Actions on opening menus on mobile devices  */


    /* BEGIN Rating star on comment  */
    $('.js__rating-star__item').click(function () {
        $('.js__rating-star__item.active').removeClass('active');
        $(this).toggleClass('active');
    });
    /* END Rating star on comment */


    /* BEGIN Show phone when you click in the sidebar  */
    $('.widget-box__phone-reveal').click(function () {
        $(this).children('.text-muted').hide();
        var phone = $(this).children('.numbers').attr('data-phone');
        $(this).children('.numbers').text(phone);
    });
    /* END Show phone when you click in the sidebar */


    /* BEGIN Transfer "widget-about" on mobile */
    if ((isMobile.any())) $(".widget-about").appendTo(".single-block__location");
    /* END Transfer "widget-about" on mobile */


    /* BEGIN Script scroll to top  */
    var scrollToTop = $('.scrollToTop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            scrollToTop.fadeIn();
        } else {
            scrollToTop.fadeOut();
        }
    });

    // scroll body to 0px on click
    scrollToTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    /* END Script scroll to top  */
});


/* BEGIN Initializing google map in site content */
function GoogleReadyHandlers() {
    var infoWindow, map = new google.maps.Map(document.getElementById('maps-content'), {
        center: {lat: 40.74741884809068, lng: -73.78190946044555},
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: true,
        mapTypeId: "roadmap"
    });
    return map;
}
/* END Initializing google map in site content */
