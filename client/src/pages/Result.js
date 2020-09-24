import React from 'react';
import { Link } from 'react-router-dom';
import './Result.css'
import { cities } from '../Datas/Dummy'
function Result() {
  
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