import React from 'react';
import './Schedule.css'
function Schedule ({ match }) { 
  const { city } = match.params;
  let data = { Tokyo : {
    flights : [{departure : '2020-10-01 01:02', arrival : "2020-10-01 03:04", Airline : 'KE'}, {departure : '2020-10-01 07:12', arrival : "2020-10-01 09:14", Airline : 'JL'},{departure : '2020-10-01 16:07', arrival : "2020-10-01 18:04", Airline : 'OZ'},{departure : '2020-10-01 19:07', arrival : "2020-10-01 21:04", Airline : 'NH'}],
    articles : [{title : '도쿄 여행 3일 치기 코스 추천', id : 1}, {title : '가족과 함께 도쿄 투어', id : 2}, {title : '도쿄 빠찡꼬 방문기', id : 3},{title : '도쿄 맛집은 이리로', id : 4},{title : '도쿄 여행 쇼핑리스트', id : 5}]
  }
  }
  const cityData = data[city];
  let air 
  let article ;
  if(!cityData) {
    air = 'unvaliable'
    article = 'unvaliable'
  } else {
  air = cityData.flights.map(ele => <li className='ticket'><div>{ele.Airline}</div><div>출발 : {ele.departure}</div><div>도착 : {ele.arrival}</div></li>);
  article = cityData.articles.map(ele => <li className='article'><p>{ele.id}</p><p>{ele.title}</p></li>)
  }
  
  return (
  <div>
    
    <h2>{city}로 가는 항공편</h2>
    <ul className='ticket-container'>{air}</ul>  
    <h2>{city}의 여행 팁</h2>
    <ul className='article-container'>{article}</ul>
  </div>  
  )
}

export default Schedule;