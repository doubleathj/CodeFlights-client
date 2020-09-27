import React from 'react';
import { Link } from 'react-router-dom';
import './Result.css';
import { cities } from '../Datas/Dummy';
function Result() {
  let city = cities.map((ele) => (
    <Link
      className='city'
      to={`/result/${ele.destination}`}
      style={{ backgroundImage: 'url(' + ele.img + ')' }}
    >
      <h3>{ele.destination}</h3>
    </Link>
  ));
  return (
    <>
      <div className='result'>
        <video muted play='true' autoPlay loop>
          <source src='/Videos/background.mp4' type='video/mp4'></source>
        </video>
        <div className='result-container'>
          <span className='result-title'>
            <h2>예정된 기간 동안 방문 가능한 {cities.length}개 도시 입니다.</h2>
          </span>
          <div className='cities'>{city}</div>
        </div>
      </div>
    </>
  );
}

export default Result;
