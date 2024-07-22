$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


    const mainVisualSlide = new Swiper('.main_visual_slide', {
        parallax: true,
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: '#mainVisual .arrows .next',
            prevEl: '#mainVisual .arrows .prev',
        },

    });

    const mainCustomerSlide = new Swiper('.main_customer_slide', {
        slidesPerView: 2.5,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '#mainCustomer .arrows .next',
            prevEl: '#mainCustomer .arrows .prev',
        },
    });


    const lenis = new Lenis()

    // lenis.on('scroll', (e) => {
    //     console.log(e)
    // })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);


    AOS.init();

})