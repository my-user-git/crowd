/* stage swiper <= 670px */

let swiperInstance = null;

function initSwiper() {
    const isMobile = window.matchMedia('(max-width: 670px)').matches;
    
    if (isMobile && !swiperInstance) {
        swiperInstance = new Swiper('.swiper.stage', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.stage__pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.stage__next',
                prevEl: '.stage__prev',
            },
        });
    } else if (!isMobile && swiperInstance) {
        swiperInstance.destroy();
        swiperInstance = null;
    }
}

initSwiper();
window.addEventListener('resize', initSwiper);


/* players-swiper */

const swiper = new Swiper('.players__swiper', {

    loop: true,
    slidesPerView: 1,
    spaceBetween: 32,

    pagination: {
        el: '.players__pagination',
        type: "fraction",
    },

    navigation: {
        nextEl: '.players__next',
        prevEl: '.players__prev',
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});
