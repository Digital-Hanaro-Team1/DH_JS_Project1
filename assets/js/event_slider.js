fetch('event_slider.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('event-slider-include').innerHTML = data;
 
    const swiperWrapper = document.querySelector('.event-swiper .inner .swiper-container .swiper-wrapper');
    const eventItems = document.querySelectorAll('.event-swiper .inner .swiper-container .swiper-wrapper .swiper-slide');

    const btnPrev = document.querySelector('.event-swiper .inner .swiper-container .swiper-button-prev');
    const btnNext = document.querySelector('.event-swiper .inner .swiper-container .swiper-button-next');

    const spanCurrentIndex = document.querySelector('.event-swiper .inner .swiper-container .swiper-pagination .swiper-pagination-current');
    const spanTotalIndex = document.querySelector('.event-swiper .inner .swiper-container .swiper-pagination .swiper-pagination-total');

    const progressBar = document.querySelector('.event-swiper .inner .swiper-container .swiper-progressbar .swiper-scrollbar-drag');

    const maxIndex = eventItems.length - 3;
    let currentIndex = 1;

    const bgProgressBarWidth = 856;
    const progressBarUnit = bgProgressBarWidth / eventItems.length
    const progressBarWidth = (progressBarUnit * 4).toFixed(3);

    function showNextEvent() {
        if (maxIndex <= currentIndex) return;
        currentIndex += 1;

        moveSwiper((currentIndex - 1) * 240);
        moveProgressBar((currentIndex - 1) * progressBarUnit);

        changeHiddenBtnNextPrev()
        changeCurIndexText();
    }

    function showPrevEvent() {
        if (currentIndex <= 1) return;
        currentIndex -= 1;

        moveSwiper((currentIndex - 1) * 240);
        moveProgressBar((currentIndex - 1) * progressBarUnit);

        changeHiddenBtnNextPrev();
        changeCurIndexText();
    }

    function changeHiddenBtnNextPrev() {
        if (currentIndex <= 1) btnPrev.hidden = true;
        else btnPrev.hidden = false;    

        if (maxIndex <= currentIndex) btnNext.hidden = true;
        else btnNext.hidden = false;
    }

    function changeCurIndexText() {
        spanCurrentIndex.innerHTML = currentIndex;
    }

    function moveSwiper(x) {
        swiperWrapper.style = `transform: translate3d(-${x}px, 0px, 0px); transition-duration: 0.5s`;
    }

    function moveProgressBar(x) {
        progressBar.style = `width: ${progressBarWidth}px; transform: translate3d(${x}px, 0px, 0px); transition-duration: 0.5s;`
    }

    function init() {
        btnPrev.addEventListener('click', showPrevEvent);
        btnNext.addEventListener('click', showNextEvent);

        spanTotalIndex.innerHTML = maxIndex;
        moveProgressBar(0)
    }

    init();

});

