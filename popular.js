function toggleDropdown() {
  const dropdown = document.querySelector('.layer_wrap ul');
  const menuBtn = document.querySelector('.layer_wrap .menu');
  const isOpen = dropdown.style.display === 'block';
  dropdown.style.display = isOpen ? 'none' : 'block';
  menuBtn.classList.toggle('open', !isOpen);
}

const tabButtons = document.querySelectorAll('.layer_wrap ul button');
const placeList = document.querySelector('.place-list');

const places = {
  hotPl: [
    {
      title: '통영케이블카',
      location: '경남 통영시',
      img: './assets/images/popular_p1.png',
      tags: ['#풍경', '#레저']
    },
    {
      title: '일산호수공원',
      location: '경기 고양시',
      img: './assets/images/popular_p2.png',
      tags: ['#공원', '#산책']
    },
    {
      title: '해인사(합천)',
      location: '경남 합천군',
      img: './assets/images/popular_p3.png',
      tags: ['#사찰', '#역사']
    },
    {
      title: '속초 외옹치 바다향기로',
      location: '강원 속초시',
      img: './assets/images/popular_p4.png',
      tags: ['#산책', '#해변']
    },
    {
      title: '고성 통일전망타워',
      location: '강원 고성군',
      img: './assets/images/popular_p5.png',
      tags: ['#전망', '#북녘']
    },
    {
      title: '여수예술랜드',
      location: '전남 여수시',
      img: './assets/images/popular_p6.png',
      tags: ['#포토존', '#가족여행']
    },
    {
      title: '서울숲',
      location: '서울 성동구',
      img: './assets/images/popular_p7.png',
      tags: ['#자연', '#공원']
    },
    {
      title: '인천대공원',
      location: '인천 남동구',
      img: './assets/images/popular_p8.png',
      tags: ['#자연', '#산책']
    }
  ],
  hotRest: [
    {
      title: '백종원식당',
      location: '서울 마포구',
      img: './assets/images/popular_p3.png',
      tags: ['#맛집', '#한식']
    }
  ],
  hotStay: [
    {
      title: '롯데호텔',
      location: '서울 중구',
      img: './assets/images/popular_p4.png',
      tags: ['#숙소', '#호텔']
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.layer_wrap ul');
  const menuBtn = document.querySelector('.layer_wrap .menu');

  menuBtn.addEventListener('click', toggleDropdown);

  function renderPlaces(category) {
    placeList.innerHTML = places[category].map(place => `
      <li class="place-card">
        <a href="#">
          <span class="img">
            <img src="${place.img}" alt="${place.title}" />
          </span>
          <div class="info">
            <strong>${place.title}</strong>
            <em>${place.location}</em>
            <div class="tags">
              ${place.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
          </div>
        </a>
        <button type="button" class="good" onclick="setLikeContent('${place.title}', this)">좋아요</button>
      </li>
    `).join('');
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderPlaces(btn.id);
      const text = btn.cloneNode(true);
      text.querySelector('span')?.remove();
      menuBtn.textContent = text.textContent.trim();
      menuBtn.appendChild(document.createElement('span')).className = 'mo';
      dropdown.style.display = 'none';
      menuBtn.classList.remove('open');
    });
  });

  renderPlaces('hotPl');
  const defaultBtn = document.getElementById('hotPl');
  const defaultText = defaultBtn.cloneNode(true);
  defaultText.querySelector('span')?.remove();
  menuBtn.textContent = defaultText.textContent.trim();
  menuBtn.appendChild(document.createElement('span')).className = 'mo';
}); 

document.querySelector('.layer_wrap ul').style.display = 'none';
menuBtn.classList.remove('open');

document.getElementById('hotPl').click();
