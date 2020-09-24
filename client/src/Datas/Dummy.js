module.exports = {
  cities: [{
    id: 1,
    destination: 'Tokyo',
    img: 'https://www.gotokyo.org/kr/plan/tokyo-outline/images/main.jpg'
  }, {
    id: 2,
    destination: 'Phuket',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/12/4f/4d/b9/phuket.jpg'
  }, {
    id: 3,
    destination: 'Beijing',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuRx7leplXTitzF_gV-gomJvDBjHJlrpI_gA&usqp=CAU'
  }, {
    id: 4,
    destination: 'Shanghai',
    img: 'https://i2.wp.com/cired2020shanghai.org/wp-content/uploads/2019/09/shanghai_tower.jpg?fit=1021%2C531'
  }, {
    id: 5,
    destination: 'Osaka',
    img: 'https://loveincorporated.blob.core.windows.net/contentimages/fullsize/1751dc80-2a64-4593-8a56-bd75502fb470-lead-image-osaka-2.jpg'
  }, {
    id: 6,
    destination: 'Berlin',
    img: 'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/europe/berlin-travel.adapt.1900.1.jpg'
  }],
  data: {
    Tokyo: {
      flights: [{
        departure: '2020-10-01 01:02',
        arrival: "2020-10-01 03:04",
        Airline: 'KE'
      }, {
        departure: '2020-10-01 07:12',
        arrival: "2020-10-01 09:14",
        Airline: 'JL'
      }, {
        departure: '2020-10-01 16:07',
        arrival: "2020-10-01 18:04",
        Airline: 'OZ'
      }, {
        departure: '2020-10-01 19:07',
        arrival: "2020-10-01 21:04",
        Airline: 'NH'
      }],
      articles: [{
        title: '도쿄 여행 3일 치기 코스 추천',
        contents: '도쿄 가실 때는 태극기를 꼭 지참하세요',
        id: 1
      }, {
        title: '가족과 함께 도쿄 투어',
        contents: '가족과 함께 가실 때는 애국가를 불러주세요',
        id: 2
      }, {
        title: '도쿄 빠찡꼬 방문기',
        contents: ' 슬롯 머신에 태극기를 꼽고하시면 확률이 올라가요',
        id: 3
      }, {
        title: '도쿄 맛집은 이리로',
        contents: '한우불고기 맛집 경복궁',
        id: 4
      }, {
        title: '도쿄 여행 쇼핑리스트',
        contents: '태극기, 메가폰, 그리고 한국인 이라는 긍지',
        id: 5
      }]
    }
  }
}