const dows = ['일', '월', '화', '수', '목', '금', '토'];
const calendar = document.querySelector('.festival_calendar .calendar');
const dayTiles = calendar.querySelectorAll('.festival_calendar .calendar #dayList .mainDayList');
const btnPrevTwoWeeks = calendar.querySelector('.prev');
const btnNextTwoWeeks = calendar.querySelector('.next');

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let startDate = today;
let selectedDate = today;

init();

function init() {
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
}

function alertIsNotThreeMonths() {
    alert('당월 기준 이전/이후 3개월 이내의 정보만 확인하실 수 있습니다.');
}

function initTile(tile) {
    tile.className = 'mainDayList';
    tile.querySelector('.month')?.remove();
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

    button.addEventListener('click', (_) => onSelectDay(date));
}

function onSelectDay(date) {
    dayTiles.forEach((el) => {
        if (el.classList.contains('on')) {
            el.classList.remove('on');
        }

        if (el.classList.contains(formatDateToYYYYMMDD(date))) {
            el.classList.add('on');
        }
    })
}

function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
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