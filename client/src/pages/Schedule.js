import React from 'react';
import './Schedule.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as planCheck from '../modules/destinations';
import * as plan from '../modules/plan';

function Schedule(props) {
  const { city } = props.match.params;
  const { flights, userPostings, blogPostings } = props;
  console.log(city);
  console.log(props);
  console.log(flights, userPostings, blogPostings);
  let counter = 10;
  if (userPostings) counter -= userPostings.length;
  let tickets = flights.map((ele) => (
    <li className='ticket'>
      <div>{ele.carrier}</div>
      <div>{ele.carrierNo}</div>
      <div>{ele.departure}</div>
    </li>
  ));
  let userPost;
  if (userPostings) {
    userPost = userPostings.map((ele) => (
      <li className='article'>
        <Link className='view' to={`/result/${city}/${ele.id}`}>
          <p className='title'>{ele.title}</p>
          <p className='contents'>{ele.contents}</p>
        </Link>
      </li>
    ));
  }
  let blog = [];
  for (let i = 0; i < counter; i++) {
    blog.push(
      <li className='article'>
        {/* <a className='view' href={blogPostings[i].link}>
          <p className='title'>{blogPostings[i].title}</p>
          <p className='contents'>{blogPostings[i].contents}</p>
        </a> */}
      </li>
    );
  }
  console.log(blog)
  return (
    <div className='schedule'>
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
      <div className='schedule-containaer'>
        <div className='info'>
          <h2>{city}에 가는 항공편</h2>
        </div>
        <ul className='ticket-container'>{tickets}</ul>
        <div className='tip'>
          <h2>{city}의 여행 팁</h2>
        </div>
        <ul className='article-list'>
          {userPost ? userPost : false}
          {blog}
        </ul>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    place: state.destinations.place,
    flights: state.plan.flights,
    blogPostings: state.plan.blogPostings,
    userPostings: state.plan.userPostings,
  }),
  (dispatch) => ({
    destinationsCheck: (data) => dispatch(planCheck.destinationsCheck(data)),
    getPlan: (data) => dispatch(plan.getPlan(data)),
  })
)(Schedule);
