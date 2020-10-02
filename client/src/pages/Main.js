import React, { useState } from 'react';
import './Main.css';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as travelActions from '../modules/travel';
import * as planCheck from '../modules/destinations';

function Main(props) {
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
    axios
      .post('https://codeflights.xyz/search/result', {
        departureDate: depDate,
        arrivalDate: period,
      })
      .then((res) => {
        setDep(0);
        setPeriod(0);
        props.destinationsCheck(res.data);
        localStorage.destinations = JSON.stringify(res.data);
      })
      .then(() => {
        props.start();
      });
  };

  return (
    <div className='Main'>
      <div className='search'>
        {depDate === null ? (
          <div>
            <h1>며칠 후에 출발하실 건가요?</h1>
            <input
              type='number'
              pattern='[0-9]+'
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
              pattern='[0-9]+'
              placeholder='숫자를 입력해주세요.'
            ></input>
          </div>
        ) : (
          false
        )}
          {period !== null && depDate !== null ?
          <CircularProgress />
          : false}
          {period !== null && depDate !== null ? 
          searchDate()
          : false}
        {props.isLoad ? props.history.push('/search/result') : <></>}

      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    departureDate: state.travel.departureDate,
    arrivalDate: state.travel.arrivalDate,
    isLoad: state.travel.isLoad,
    place: state.destinations.place,
  }),
  (dispatch) => ({
    start: () => dispatch(travelActions.whenIsDepDate()),
    destinationsCheck: (data) => dispatch(planCheck.destinationsCheck(data)),
  })
)(Main);
