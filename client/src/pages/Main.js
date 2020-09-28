import React, { useState } from 'react';
import './Main.css';
import { Redirect } from 'react-router-dom';

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

  

  return (
    <div className='Main'>
      <video muted play='true' autoPlay loop>
        <source src='/Videos/background.mp4' type='video/mp4'></source>
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
              type='number'
              placeholder='숫자를 입력해주세요.'
            ></input>
          </div>
        ) : (
          false
        )}
        {period !== null && depDate !== null ? (
          <Redirect to={`/search/${depDate}=${period}`}></Redirect>
        ) : (
          false
        )}
      </div>
    </div>
  );
}

export default Main;
