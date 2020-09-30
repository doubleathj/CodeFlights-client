import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Result.css';
import { connect } from 'react-redux';
import * as planCheck from '../modules/destinations';
import * as plan from '../modules/plan';
import axios from 'axios';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  planToGo = (city) => {

    axios.get(`https://codeflights.xyz/search/result/destination?city=${city}`)
      .then(res => {
        this.props.getPlan(res.data)
        this.props.loaded()
    })
  }
  componentDidMount(){
    axios.get('https://codeflights.xyz/search/result')
    .then(data => {console.log(data.data)
    this.props.destinationsCheck(data.data)})
  }
  render () {
    let city = this.props.place.map((ele) => (
      <div onClick={() => this.planToGo(ele.portName)}>{this.props.load ? <Redirect className='city' to={`/result/${ele.portName}`}>
      </Redirect> : <h3>{ele.portName}</h3>}
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
            <div className='result-title'>
              예정된 기간 동안 방문 가능한 {this.props.place.length}개 도시
              입니다.
            </div>
            <div className='cities'>{city}</div>
          </div>
        </div>
      </>
    );
  }
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
