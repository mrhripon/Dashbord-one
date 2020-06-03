(function ($) {
    "use strict";

    // Script for Mobile Menu Activation
    $(document).ready(function () {
        $('.mobile-bar').on('click', function () {
            $('.leftSidebar, .off-canvas-overlay').addClass('active');
        })

        $('.mobile-close-icon, .off-canvas-overlay').on('click', function () {
            $('.leftSidebar, .off-canvas-overlay').removeClass('active');
        })
    })




















    // Script for Slick Slider Activation
    $('.award-wining-active').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-right"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-left"></i></button>'
    });



    // Script for Nice Select Activation 
    $(document).ready(function () {
        $('select').niceSelect();
    })

    // Script for Magnific Popup Activation 
    $(document).ready(function () {
        $('.iframe-link').magnificPopup({ type: 'iframe' });
    });





    // Script For Scroll to top Button
    $(document).ready(function () {
        var back = $('.back-to-top');
        back.on('click', function () {
            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        })
        $(window).on('scroll', function () {
            var self = $(this),
                height = self.height(),
                top = self.scrollTop();
            if (top > height) {
                back.addClass('visible');
            } else {
                back.removeClass('visible');
            }
        })

    })


})(jQuery);	 