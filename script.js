var swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    allowTouchMove: false,
    direction: getDirection(),
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    speed: 500,
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3,
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? "horizontal" : "horizontal";

    return direction;
}

const swiperEl = document.querySelector('.swiper');
let isAutoplayPaused = false;

if (window.innerWidth <= 768) {
    swiperEl.addEventListener('click', () => {
        if (isAutoplayPaused) {
            swiper.autoplay.start();
            isAutoplayPaused = false;
        } else {
            swiper.autoplay.stop();
            isAutoplayPaused = true;
        }
    });
}