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
    
    const BG_PROGRESSBAR_WIDTH = 856;
    const PROGRESSBAR_UNIT = BG_PROGRESSBAR_WIDTH / eventItems.length
    const PROGRESSBAR_WIDTH = (PROGRESSBAR_UNIT * 4).toFixed(3);
    let curProgressBarOffsetX = progressBar.offsetLeft;
    
    const EVENT_SLIDE_WIDTH = 240;
    let curSwiperOffsetX = swiperWrapper.offsetLeft;
    const maxIndex = eventItems.length - 3;
    let currentIndex = 1;

    let startX = 0;
    let isDragging = false;

    function showNextEvent() {
        if (maxIndex <= currentIndex) return;

        moveToIndex(currentIndex + 1);
    }

    function showPrevEvent() {
        if (currentIndex <= 1) return;

        moveToIndex(currentIndex - 1);
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

    function moveSwiper(x, duration = 0.5) {
        swiperWrapper.style = `transform: translate3d(${x}px, 0px, 0px); transition-duration: ${duration}s`;
    }

    function moveProgressBar(x, duration = 0.5) {
        progressBar.style = `width: ${PROGRESSBAR_WIDTH}px; transform: translate3d(${x}px, 0px, 0px); transition-duration: ${duration}s;`
    }

    function moveToIndex(index) {
        currentIndex = index;

        curSwiperOffsetX = -(currentIndex - 1) * EVENT_SLIDE_WIDTH;
        moveSwiper(curSwiperOffsetX);

        curProgressBarOffsetX = (currentIndex - 1) * PROGRESSBAR_UNIT;
        moveProgressBar(curProgressBarOffsetX);

        changeHiddenBtnNextPrev();
        changeCurIndexText();
    }

    function init() {
        btnPrev.addEventListener('click', showPrevEvent);
        btnNext.addEventListener('click', showNextEvent);

        swiperWrapper.addEventListener("mousedown", (e) => {
            isDragging = true;
            startX = e.clientX; // 시작 지점 기록
        });
        
        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;

            distance = e.clientX - startX;
            moveSwiper(curSwiperOffsetX + distance, 0);

            let progressBarDistance = distance * (PROGRESSBAR_UNIT / EVENT_SLIDE_WIDTH ) ;
            moveProgressBar(curProgressBarOffsetX - progressBarDistance, 0);
        });
        
        document.addEventListener("mouseup", (e) => {
            if (!isDragging) return;
            isDragging = false;

            const distance = e.clientX - startX;
            const direction = distance < 0 ? 'left' : 'right';
            const movedCount = Math.round(Math.abs(distance) / EVENT_SLIDE_WIDTH);

            let targetIdx = direction === 'left'
                ? currentIndex + movedCount
                : currentIndex - movedCount;

            // 슬라이더 범위 제한
            targetIdx = Math.max(1, Math.min(maxIndex, targetIdx));

            console.log(distance, direction, movedCount, targetIdx);

            moveToIndex(targetIdx);
        });

        spanTotalIndex.innerHTML = maxIndex;
        changeHiddenBtnNextPrev();
        moveProgressBar(0)
    }

    init();

});

