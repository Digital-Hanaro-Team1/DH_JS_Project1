const festivals = [
    {
        image: './assets/images/festival-calendar/festival_thumbnail1.jpg',
        title: '피노키오 페스티벌',
        addr: '경기 가평군',
        detailAddr: '경기도 가평군 청평면 호반로 1063',
        startDate: new Date(2025, 3, 7),
        endDate: new Date(2025, 3, 21),
    },
    {
        image: './assets/images/festival-calendar/festival_thumbnail2.jpg',
        title: '대천시민천문대 별축제',
        addr: '대전 유성구',
        detailAddr: '대전광역시 유성구 대덕대로 480 (도룡동)',
        startDate: new Date(2025, 3, 16),
        endDate: new Date(2025, 3, 20),
    },
    {
        image: './assets/images/festival-calendar/festival_thumbnail3.png',
        title: '경복궁 별빛야행',
        addr: '서울 종로구',
        detailAddr: '서울특별시 종로구 사직로 161 (세종로)',
        startDate: new Date(2025, 3, 2),
        endDate: new Date(2025, 3, 16),
    },
    {
        image: './assets/images/festival-calendar/festival_thumbnail4.jpg',
        title: '용인 자작나무숲 봄꽃축제',
        addr: '경기 용인시',
        detailAddr: '경기도 용인시 처인구 백암면 석천리 723-2',
        startDate: new Date(2025, 3, 19),
        endDate: new Date(2025, 4, 1),
    },
    {
        image: './assets/images/festival-calendar/festival_thumbnail5.jpg',
        title: '서울가든페스타',
        addr: '서울 성동구',
        detailAddr: '서울특별시 성동구 뚝섬로 273 (성수동1가)',
        startDate: new Date(2025, 2, 26),
        endDate: new Date(2025, 3, 8),
    },
    {
        image: './assets/images/festival-calendar/festival_thumbnail6.jpg',
        title: '피나클랜드 봄꽃축제',
        addr: '충남 아산시',
        detailAddr: '충청남도 아산시 영인면 월선길 20-42',
        startDate: new Date(2025, 2, 22),
        endDate: new Date(2025, 3, 5),
    },
    {
        image: './assets/images/festival-calendar/festival_thumbnail7.jpg',
        title: '2025 대한민국 임시정부기념관 토크콘서트',
        addr: '서울 서대문구',
        detailAddr: '서울특별시 서대문구 통일로 279-24 (현저동)',
        startDate: new Date(2025, 4, 4),
        endDate: new Date(2025, 4, 16),
    },
    {
        image: './assets/images/festival-calendar/festival_thumbnail8.jpg',
        title: '베어트리파크 봄꽃 축제',
        addr: '세종',
        detailAddr: '세종특별자치시 신송로 217 베어트리파크',
        startDate: new Date(2025, 3, 18),
        endDate: new Date(2025, 3, 29),
    },
];

fetch('festival_calendar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('festival-calendar-include').innerHTML = data;
    
    // calendar -----------------------------------------------------
    const dows = ['일', '월', '화', '수', '목', '금', '토'];
    const calendar = document.querySelector('.festival_calendar .calendar');
    const dayTiles = calendar.querySelectorAll('.festival_calendar .calendar #dayList .mainDayList');
    const btnPrevTwoWeeks = calendar.querySelector('.prev');
    const btnNextTwoWeeks = calendar.querySelector('.next');

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let startDate = today;
    let selectedDate = today;
    // festival -----------------------------------------------------
    const ftSwiperContainer = document.querySelector('.festival_calendar .list .swiper_container');
    const ftSwiperWhenEmpty = document.querySelector('.festival_calendar .list .no_list');
    const ftSwiperWrapper = ftSwiperContainer.querySelector('.swiper-wrapper');
    const ftSwiperPagination = ftSwiperContainer.querySelector('.page_btn .inner .swiper-pagination');
    const btnFtPrev = ftSwiperContainer.querySelector('.page_btn .inner .swiper-button-prev');
    const btnFtNext = ftSwiperContainer.querySelector('.page_btn .inner .swiper-button-next');


    const slideWidth = 680;
    const windowWidth = window.innerWidth;
    const offsetX = (windowWidth / 2) - (slideWidth / 2);

    let filteredFtList = [];
    let curFtIdx = 0;

    // --------------------------------------------------------------

    init();

    function init() {
        initCalendar();
        initFtSlider();
        ftSwiperWrapper.style = `transition-duration: 0ms; transform: translate3d(${offsetX}px, 0px, 0px)`;

        changeHiddenFtBtnNextPrev();
    }

    // calendar function ----------------------------------------------------------------

    function initCalendar() {
        setTwoWeeks(today);
        btnPrevTwoWeeks.addEventListener('click', changeToPrevTwoWeeks);
        btnNextTwoWeeks.addEventListener('click', changeToNextTwoWeeks);
    }

    function setTwoWeeks(date) {
        for (let i = 0; i < 14; i++) {
            const nextDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i);;
            const tile = dayTiles[i];
            initTile(tile);

            if (i === 0 || nextDay.getDate() === 1) setMonthTag(nextDay, tile);
            setDayTile(nextDay, tile);
        }
    }

    function changeToPrevTwoWeeks() {
        const newStartDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() - 14);

        if (!isWithinThreeMonths(newStartDate, today)) {
            alertIsNotThreeMonths();
            return;
        }

        startDate = newStartDate;
        selectedDate = newStartDate;

        setTwoWeeks(startDate);
        setFestivalTileList();
    }

    function changeToNextTwoWeeks() {
        const newStartDate = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 14);

        if (!isWithinThreeMonths(newStartDate, today)) {
            alertIsNotThreeMonths();
            return;
        }

        startDate = newStartDate;
        selectedDate = newStartDate;
        setTwoWeeks(startDate);
        setFestivalTileList();
    }

    function alertIsNotThreeMonths() {
        alert('당월 기준 이전/이후 3개월 이내의 정보만 확인하실 수 있습니다.');
    }

    function initTile(tile) {
        tile.className = 'mainDayList';
        tile.querySelector('.month')?.remove();
        tile.querySelector('button').onclick = null;
    }

    function setMonthTag(date, tile) {
        const div = document.createElement('div');
        div.classList.add('month');
        div.innerHTML = `${date.getFullYear()}.${date.getMonth() + 1}`;

        tile.insertBefore(div, tile.firstChild);
    }

    function setDayTile(date, tile) {
        tile.classList.add(formatDateToYYYYMMDD(date));

        const dow = date.getDay();
        const button = tile.querySelector('button');
        const [dateTile, dowTile] = button.querySelectorAll('button span');
        dateTile.innerHTML = date.getDate();

        if (dow === 6) {
            tile.classList.add('saturday');
        }
        if (dow === 0) {
            tile.classList.add('holiday');
        }

        if (isSameDay(today, date)) {
            dowTile.innerHTML = '오늘';
        } else {
            dowTile.innerHTML = dows[dow];
        }

        if (isSameDay(selectedDate, date)) {
            tile.classList.add('on');
        }

        button.onclick = (_) => onSelectDay(date);
    }

    function onSelectDay(date) {
        dayTiles.forEach((el) => {
            if (el.classList.contains('on')) {
                el.classList.remove('on');
            }

            if (el.classList.contains(formatDateToYYYYMMDD(date))) {
                el.classList.add('on');
            }
        });
        selectedDate = date;
        setFestivalTileList();
    }

    function formatDateToYYYYMMDD(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    }

    function formatDateToDotYMD(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1);
        const day = String(date.getDate());
        return `${year}. ${month}. ${day}.`;
    }

    function isSameDay(a, b) {
        return a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate();
    }

    function isWithinThreeMonths(date1, date2) {
      const d1 = new Date(date1);
      const d2 = new Date(date2);

      const earlier = d1 < d2 ? d1 : d2;
      const later = d1 >= d2 ? d1 : d2;

      const limit = new Date(earlier);
      limit.setMonth(limit.getMonth() + 3);

      return later <= limit;
    }

    // festival function ----------------------------------------------------------------

    function initFtSlider() {
        setFestivalTileList();

        btnFtPrev.addEventListener('click', onClickFtPrevBtn);
        btnFtNext.addEventListener('click', onClickFtNextBtn);
    }

    function getFestivalsForSelectedDay() {
        return festivals.filter((el) => el.startDate <= selectedDate && el.endDate >= selectedDate);
    }

    function setFestivalTileList() {
        ftSwiperWrapper.replaceChildren();
        ftSwiperPagination.replaceChildren();

        filteredFtList = getFestivalsForSelectedDay();

        if (filteredFtList.length === 0) {
            ftSwiperContainer.style.display = 'none';
            ftSwiperWhenEmpty.style = '';
        } else {
            ftSwiperContainer.style = 'none';
            ftSwiperWhenEmpty.style.display = 'none';
        }

        filteredFtList.forEach((ft, index) => {
            const divSlide = createFestivalTile(ft);
            ftSwiperWrapper.appendChild(divSlide);
            ftSwiperPagination.appendChild(createFtPaginationBullet(index));
        });

        moveToIndex(0, 0);
    }

    function createFestivalTile(festival) {
        const divSlide = document.createElement('div');
        divSlide.className = 'swiper-slide';

        const divInner = document.createElement('div');
        divInner.className = 'inner';

        const spanImg = createFtImg(festival);
        const divInfo = createFtInfo(festival);

        divInner.appendChild(spanImg);
        divInner.appendChild(divInfo);

        divSlide.appendChild(divInner);

        return divSlide;
    }

    function createFtImg(festival) {
        const spanImg = document.createElement('span');
        spanImg.className = 'img';

        const img = document.createElement('img');
        img.src = festival.image;
        img.alt = festival.title;

        spanImg.appendChild(img);

        return spanImg;
    }

    function createFtInfo(festival) {
        const divInfo = document.createElement('div');
        divInfo.className = 'info';

        const h3Title = document.createElement('h3');
        h3Title.innerHTML = festival.title;

        const emAddr = document.createElement('em');
        emAddr.innerHTML = festival.addr;

        const divPeriodPlace = document.createElement('div');
        divPeriodPlace.className = 'period_place';
        const divPeriod = createFtInfoPeriod(festival);
        const divPlace = createFtInfoPlace(festival);
        divPeriodPlace.appendChild(divPeriod);
        divPeriodPlace.appendChild(divPlace);

        const divBtn = createFtInfoBtn();

        divInfo.appendChild(h3Title);
        divInfo.appendChild(emAddr);
        divInfo.appendChild(divPeriodPlace);
        divInfo.appendChild(divBtn);

        return divInfo;
    }

    function createFtInfoPeriod(festival) {
        const divPeriod = document.createElement('div');
        divPeriod.className = 'period';

        divPeriod.innerHTML = 
        `<strong>기간</strong>
        <span>${formatDateToDotYMD(festival.startDate)} ~ ${formatDateToDotYMD(festival.endDate)}</span>`

        return divPeriod;
    }

    function createFtInfoPlace(festival) {
        const divPlace = document.createElement('div');
        divPlace.className = 'place';

        divPlace.innerHTML = 
        `<strong>장소</strong>
        <span>${festival.detailAddr}</span>`

        return divPlace;
    }

    function createFtInfoBtn() {
        const divBtn = document.createElement('div');
        divBtn.className = 'btn';

        divBtn.innerHTML = 
        `<a href="#">바로가기</a>
        <a href="#">길찾기</a>`;

        return divBtn;
    }

    function createFtPaginationBullet(index) {
        const divBullet = document.createElement('div');
        divBullet.classList.add('swiper-pagination-bullet');
        if (curFtIdx === index) divBullet.classList.add('swiper-pagination-bullet-active');

        divBullet.tabIndex = index;
        divBullet.onclick = (_) => moveToIndex(index);

        return divBullet;
    }

    function onClickFtPrevBtn() {
        if (curFtIdx <= 0) return;

        moveToIndex(curFtIdx - 1);
    }

    function onClickFtNextBtn() {
        if (curFtIdx >= (filteredFtList.length - 1)) return;

        moveToIndex(curFtIdx + 1);
    }

    function activeFtTile(index) {
        const ftTiles = ftSwiperWrapper.querySelectorAll('.swiper-slide');
        ftTiles.forEach((item) => {
            item.className = 'swiper-slide';
        });
        ftTiles[index].classList.add('active');
    }

    function changeHiddenFtBtnNextPrev() {
        if (curFtIdx <= 0) btnFtPrev.style.display = 'none';
        else btnFtPrev.style.display = 'inline-block';

        if ((filteredFtList.length - 1) <= curFtIdx) btnFtNext.style.display = 'none';
        else btnFtNext.style.display = 'inline-block';
    }

    function activeFtBullet(index) {
        const bullets = ftSwiperPagination.querySelectorAll('.swiper-pagination-bullet');
        bullets.forEach((item) => {
            item.className = 'swiper-pagination-bullet';
        })
        bullets[index].classList.add('swiper-pagination-bullet-active');
    }

    function moveToIndex(index, duration = 0.5) {
        curFtIdx = index;

        // 슬라이드
        ftSwiperWrapper.style = `transform: translate3d(${offsetX - (index * 700)}px, 0px, 0px); transition-duration: ${duration}s;`;

        // 축제 타일 활성화
        activeFtTile(index);

        // 인디케이터 적용
        activeFtBullet(index);

        // 버튼 표시 여부 적용
        changeHiddenFtBtnNextPrev();
    }
});