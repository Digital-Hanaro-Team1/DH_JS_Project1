function toggleDropdown() {
  const dropdown = document.querySelector('.layer_wrap ul');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

const tabButtons = document.querySelectorAll('.layer_wrap ul button');
const placeList = document.querySelector('.place-list');

const places = {
  hotPl: [
    {
      title: '서울숲',
      location: '서울 성동구',
      img: './assets/images/popular_p1.png',
      tags: ['#자연', '#공원']
    },
    {
      title: '해운대',
      location: '부산 해운대구',
      img: './assets/images/popular_p2.png',
      tags: ['#해변', '#부산']
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

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const list = places[btn.id];
    placeList.innerHTML = list.map(place => `
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
    document.querySelector('.layer_wrap ul').style.display = 'none';
  });
});
