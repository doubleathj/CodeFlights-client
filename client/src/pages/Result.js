import React from 'react';
import { Link } from 'react-router-dom';
import './Result.css'
function Result() {
  const cities = [{
    id: 1,
    destination: 'Tokyo',
    img : 'https://www.gotokyo.org/kr/plan/tokyo-outline/images/main.jpg'
  }, {
    id: 2,
    destination: 'Phuket',
    img : 'https://media-cdn.tripadvisor.com/media/photo-s/12/4f/4d/b9/phuket.jpg'
  }, {
    id: 3,
    destination: 'Beijing',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuRx7leplXTitzF_gV-gomJvDBjHJlrpI_gA&usqp=CAU'
  }, {
    id: 4,
    destination: 'Shanghai',
    img : 'https://i2.wp.com/cired2020shanghai.org/wp-content/uploads/2019/09/shanghai_tower.jpg?fit=1021%2C531'
  }, {
    id: 5,
    destination: 'Osaka',
    img : 'https://loveincorporated.blob.core.windows.net/contentimages/fullsize/1751dc80-2a64-4593-8a56-bd75502fb470-lead-image-osaka-2.jpg'
  }, {
    id: 6,
    destination: 'Berlin',
    img : 'https://www.nationalgeographic.com/content/dam/travel/Guide-Pages/europe/berlin-travel.adapt.1900.1.jpg'
  }]
  let city = cities.map(ele => <Link className="city" to={`/result/${ele.destination}`} style={{backgroundImage: "url("+ele.img+")"}} ><h3>{ele.destination}</h3></Link> )
  return (
    <h2>예정된 기간 동안 방문 가능한 {cities.length}개 도시 입니다.
    <div className='cities'>  
      {city}
    </div>
    </h2>
  )
}

export default Result;