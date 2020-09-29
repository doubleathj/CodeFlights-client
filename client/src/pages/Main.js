import React, { useState } from 'react';
import './Main.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Main() {
  const [depDate, setDep] = useState(null);
  const [period, setPeriod] = useState(null);

  let handleKeyPressDep = (e) => {
    if (e.key === 'Enter') {
      setDep(e.target.value);
      e.target.value = null;
    }
  };
  let handleKeyPressPeriod = (e) => {
    if (e.key === 'Enter') {
      setPeriod(e.target.value);
    }
  };
  let searchDate = () => {
    axios.get(`https://codeflights.xyz/search?departureDate=${depDate}&arrivalDate=${period}`)
  }
  return (
    <div className='Main'>
      <video
        className='video'
        autoPlay='true' //모바일 재생 필수 태그
        playsInline='true' //모바일 재생 필수 태그
        loop='loop'
        muted='true' //모바일 재생 필수 태그 ios 저전력 모드일 때는 작동 불가 애플 정책
        width='1280'
        height='720'
      >
        <source src='/Videos/background.mp4' type='video/mp4' />
      </video>
      <div className='search'>
        {depDate === null ? (
          <div>
            <h1>며칠 후에 출발하실 건가요?</h1>
            <input
              type='text'
              pattern='[0-9]'
              onKeyPress={handleKeyPressDep}
              className='dep'
              placeholder='숫자를 입력해주세요.'
            ></input>
          </div>
        ) : (
          false
        )}
        {period === null && depDate !== null ? (
          <div>
            <h1>얼마동안 여행하실 건가요?</h1>
            <input
              className='period'
              onKeyPress={handleKeyPressPeriod}
              type='text'
              placeholder='숫자를 입력해주세요.'
            ></input>
          </div>
        ) : (
          false
        )}
        {period !== null && depDate !== null ? 
          searchDate()
          : 
          false
        }
      </div>
    </div>
  );
}

export default Main;