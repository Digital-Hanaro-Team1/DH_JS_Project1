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
      title: '만석닭강정 본점',
      location: '강원 속초시',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=ba1f172f-c9b6-4f1c-8780-f16d1f72f374&mode=progress',
      tags: ['#속초명물', '#닭강정맛집']
    },
    {
      title: '내추럴가든529',
      location: '경기 양평군',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=1be859ad-3228-4b61-9e32-17a6cfbdef7a&mode=progress',
      tags: ['#정원카페', '#가볼래터']
    },
    {
      title: '88생선구이',
      location: '강원 속초시',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=80f32c4d-107a-4255-8440-c07af50d442a&mode=progress',
      tags: ['#생선구이정식', '#속초여행']
    },
    {
      title: '스멜츠',
      location: '경기 광주시',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=4d298464-dd7a-4fc9-8a9c-33a82e874a17&mode=progress',
      tags: ['#스멜츠', '#숲뷰가예쁜카페']
    },
    {
      title: '조양방직',
      location: '인천 강화군',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=9f0c4d38-dcc6-4ed3-893c-4fb81c5e1f0f&mode=progress',
      tags: [ '#SNS속_인생샷명소']
    },
    {
      title: '게으른악어',
      location: '충북 충주시',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=abedce75-45d2-4538-8943-d0e6afb35dd8&mode=progress',
      tags: ['#충주카페', '#여행지_추천']
    },
    {
      title: '덩실분식',
      location: '충북 제천시',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=80de9801-08fe-4a5a-a20f-3fe2ff2835a2&mode=progress',
      tags: ['#TV방영맛집', '#가볼래터']
    },
    {
      title: '툇마루',
      location: '강원 강릉시',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=acdddcf4-5378-4ce5-80b7-e34fca25f7b5&mode=progress',
      tags: ['#흑임자라떼', '#툇마루커피']
    }
  ],
  hotStay: [
    {
      title: '오버더마운틴',
      location: '경기 가평군',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=7d6645b0-7b19-487d-add2-c172cc724cbf&mode=progress',
      tags: ['#가평숙소', '#서울근교']
    },
    {
      title: '더 플라자 (THE PLAZA)',
      location: '서울 중구',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=af477414-9294-42ad-aa7c-0a0e108a87b8&mode=progress',
      tags: ['#휴식하기좋은곳', '#휴식공간']
    },
    {
      title: '영조관[한국관광 품질인증]',
      location: '전북 전주시',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5ee86299-da26-4089-9eca-fea24f57f1f2&mode=progress',
      tags: ['#품질인증업소_전라']
    },
    {
      title: '목향재',
      location: '세종',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=b2832a63-b7c8-4ad4-af7e-bef9c685baf8&mode=progress',
      tags: ['#세종한옥', '#조식가능']
    },
    {
      title: '교동가온',
      location: '전북 전주시',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=3f25b2e9-532f-47e5-824e-b2ff450e362c&mode=progress',
      tags: ['#전주한옥', '#전주숙소']
    },
    {
      title: '무아레 도그라운드',
      location: '경기 가평군',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=2947b23a-8507-48cd-bfd4-fd30649a0e2d&mode=progress',
      tags: ['#반려동물', '#경기도애견펜션']
    },
    {
      title: '라담[한국관광 품질인증]',
      location: '전북 전주시',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=fcbf4611-4007-411d-98f1-f377ddf582be&mode=progress',
      tags: ['#품질인증업소_전라']
    },
    {
      title: '신라스테이 동탄',
      location: '경기 화성시',
      img: 'https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=0a09a986-82d8-45d3-8067-1c305f08554d&mode=progress',
      tags: ['#신라스테이동탄']
    }
  ]
};

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

  const categoryNameMap = {
    hotPl: '여행지',
    hotRest: '맛집',
    hotStay: '숙소'
  };

  const btnMore = document.querySelector('.btn_more');
  if (btnMore) {
    btnMore.innerHTML = `
      <a href="javascript:goAreaListPage()">더 많은 
          <strong>${categoryNameMap[category]}</strong> 
          보러가기
      </a>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.layer_wrap ul');
  const menuBtn = document.querySelector('.layer_wrap .menu');

  menuBtn.addEventListener('click', toggleDropdown);

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      renderPlaces(btn.id);
      const text = btn.cloneNode(true);
      text.querySelector('span')?.remove();
      menuBtn.textContent = text.textContent.trim();
      const li = btn.closest('li');
      const ul = li.parentElement;
      ul.prepend(li);
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

  document.querySelector('.layer_wrap ul').style.display = 'none';
  menuBtn.classList.remove('open');

  document.getElementById('hotPl').click();
}); 

if (document.querySelector('.btn_more') && !document.querySelector('.btn_more a')) {
  const btnMore = document.querySelector('.btn_more');
  btnMore.innerHTML = `
    <a href="javascript:goAreaListPage()">더 많은 
        <strong>여행지</strong> 
        보러가기
    </a>
  `;
}


document.addEventListener("DOMContentLoaded", () => {
  const bgColors = [
    "#c2f5b6",
    "#e4b6f5",
    "#ffcf99",
    "#fff9cf",
    "#fff5a8",
    "#a6f0ff",
    "#d4e4ff",
    "#b6d6f5",
    "#fff5a8",
    "#c2e7ff",
    "#c7c9ff",
    
  ];

  const localNewsCards = document.querySelectorAll(".local_news .inr");

  localNewsCards.forEach((card) => {
    const randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    card.style.backgroundColor = randomColor;
  });
});
