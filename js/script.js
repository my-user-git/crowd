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

    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
    },

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

/* scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // меняем URL без перезагрузки (опционально)
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                location.hash = targetId;
            }
        }
    });
});
