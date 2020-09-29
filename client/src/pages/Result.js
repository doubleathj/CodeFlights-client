import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Result.css';
import { connect } from 'react-redux';
import * as planCheck from '../modules/destinations';
import * as plan from '../modules/plan';
import axios from 'axios';
function Result(props) {
  let load = false;
  let planToGo = (city) => {
    axios
      .get(`http://codeflights.xyz/search/result/destination?city=${city}`)
      .then((res) => {
        props.getPlan(res.data);
        props.loaded();
      });
  };
  let city = props.place.map((ele) => (
    <div onClick={() => planToGo(ele.destination)}>
      {props.load ? (
        <Redirect className='city' to={`/result/${ele.destination}`}></Redirect>
      ) : (
        <h3>{ele.destination}</h3>
      )}
    </div>
  ));
  return (
    <>
      <div className='result'>
        <video
          className='video'
          autoPlay='true'
          playsInline='true'
          loop='loop'
          muted='true'
          width='1280'
          height='720'
        >
          <source src='/Videos/background.mp4' type='video/mp4' />
        </video>
        <div className='result-container'>
          <span className='result-title'>
            <h2>
              예정된 기간 동안 방문 가능한 {props.place.length}개 도시 입니다.
            </h2>
          </span>
          <div className='cities'>{city}</div>
        </div>
      </div>
    </>
  );
}

export default connect(
  (state) => ({
    place: state.destinations.place,
    flights: state.plan.flights,
    blogPostings: state.plan.blogPostings,
    userPostings: state.plan.userPostings,
    load: state.plan.load,
  }),
  (dispatch) => ({
    destinationsCheck: (data) => dispatch(planCheck.destinationsCheck(data)),
    getPlan: (data) => dispatch(plan.getPlan(data)),
    loaded: () => dispatch(plan.loaded()),
  })
)(Result);
