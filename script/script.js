let typed = new Typed('.ketik', {
    strings: ["BEYOND LIMITS", "EXPLORING FRONTIER", "INFINITE HORIZON"],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true
})

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('nav-active');
        } else {
            $('#nav').removeClass('nav-active');
        }

        if ($(this).scrollTop() > 300) {
            $('.scroll-up').addClass('show');
        } else {
            $('.scroll-up').removeClass('show');

        }
    });

    // scroll offset
    $('.page-scroll').on('click', function (e) {

        let href = $(this).attr('href');

        let tujuan = $(href);
    })

    // scroll button up
    $('.scroll-up').on('click', function () {
        $('html').animate({ scrollTop: 0 }, 1000)
    })

    // Nav items show -----

    $('.menu-btn').on('click', function () {
        $('.nav-text').toggleClass('active');
        $('.menu-btn').toggleClass('active');

    });

    // -----

    $('.nav-text ul li .page-scroll').on('click', function () {
        $('.page-scroll').removeClass('active');

        $(this).closest('li a').addClass('active')
    })

})