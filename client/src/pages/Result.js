import React from 'react';
import { Link } from 'react-router-dom';
import './Result.css';
import { connect } from 'react-redux';
import * as planCheck from '../modules/destinations';


function Result(props) {
  
  let city = props.place.map((ele) => (
    <Link
      className='city'
      to={`/result/${ele.destination}`}
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
            <h2>예정된 기간 동안 방문 가능한 {props.place.length}개 도시 입니다.</h2>
          </span>
          <div className='cities'>{city}</div>
        </div>
      </div>
    </>
  );
}

export default connect((state) => ({
  place: state.destinations.place,
  
}), (dispatch) => ({
  destinationsCheck: (data) => dispatch(planCheck.destinationsCheck(data))
}))(Result);