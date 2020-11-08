import React, { useState } from 'react';
import './Main.css';



function Main(props) {
  const [depDate, setDep] = useState<number>(0);
  const [period, setPeriod] = useState<number>(0);
  const { isLoad, history } = props;

  return (
    <div className='Main'>
      <div className='search'>
        {depDate === null && (
          <div>
            <h1>며칠 후에 출발하실 건가요?</h1>
            <input
              type='number'
              className='dep'
              pattern='[0-9]+'
              placeholder='숫자를 입력해주세요'
            />
          </div>
        )}
        {period === null && depDate !== null && (
          <div>
            <h1>얼마동안 여행하실 건가요?</h1>
            <input
              type='number'
              className='period'
              pattern='[0-9]+'
              placeholder='숫자를 입력해주세요'
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
