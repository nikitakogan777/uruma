var swiper = new Swiper(".swiper", {
    slidesPerView: 'auto',
    loop: true,
    allowTouchMove: false,
    direction: getDirection(),
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    autoplay: {
        delay: 3000,
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
            slidesPerView: 2,
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