const swiperWrapper = document.querySelector('.event-swiper .inner .swiper-container .swiper-wrapper');
const eventItems = document.querySelectorAll('.event-swiper .inner .swiper-container .swiper-wrapper .swiper-slide');

const btnPrev = document.querySelector('.event-swiper .inner .swiper-container .swiper-button-prev');
const btnNext = document.querySelector('.event-swiper .inner .swiper-container .swiper-button-next');

const maxIndex = eventItems.length - 3;
let currentIndex = 1;

function showNextEvent() {
    if (maxIndex <= currentIndex) return;
    currentIndex += 1;

    swiperWrapper.style = `transform: translate3d(-${(currentIndex - 1) * 240}px, 0px, 0px); transition-duration: 0.5s`;
    changeHiddenBtnNextPrev()
}

function showPrevEvent() {
    if (currentIndex <= 1) return;
    currentIndex -= 1;

    swiperWrapper.style = `transform: translate3d(-${(currentIndex - 1) * 240}px, 0px, 0px); transition-duration: 0.5s`;
    changeHiddenBtnNextPrev();
}

function changeHiddenBtnNextPrev() {
    if (currentIndex <= 1) btnPrev.hidden = true;
    else btnPrev.hidden = false;    
    
    if (maxIndex <= currentIndex) btnNext.hidden = true;
    else btnNext.hidden = false;
}

btnPrev.addEventListener('click', showPrevEvent);
btnNext.addEventListener('click', showNextEvent);