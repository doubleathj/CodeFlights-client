import React from 'react';
import './Schedule.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as planCheck from '../modules/destinations';
import * as plan from '../modules/plan';

function Schedule(props) {
  const { city } = props.match.params;
  const { flights, userPostings, blogPostings } = JSON.parse(localStorage.plan);

  let counter = 10;
  if (userPostings) counter -= userPostings.length;
  let tickets = flights.map((ele) => (
    <ul>
      <li className='ticket'>
        <div>{ele.carrier}</div>
        <div>{ele.carrierNo}</div>
        <div>{ele.departure}</div>
      </li>
    </ul>
  ));
  let userPost;
  if (userPostings) {
    userPost = userPostings.map((ele) => (
      <ul>
        <li className='article'>
          <Link className='articleLink' to={`/result/${city}/${ele.id}`}>
            <p className='articleTitle'>{ele.title}</p>
            <p className='articleContents'>{ele.contents}</p>
          </Link>
        </li>
      </ul>
    ));
  }
  let blog = [];
  for (let i = 0; i < counter; i++) {
    blog.push(
      <li className='article'>
        <a className='articleLink' href={blogPostings[i].link}>
          <div className='articleTitle'>{blogPostings[i].title}</div>
          <div className='articleContents'>{blogPostings[i].contents}</div>
        </a>
      </li>
    );
  }
  console.log(blog);
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
        <div className='info'>{city}에 가는 항공편</div>
        <ul className='ticket-container'>{tickets}</ul>

        <div className='tip'>{city}의 여행 팁</div>
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
