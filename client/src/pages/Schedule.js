import React from 'react';
import './Schedule.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as planCheck from '../modules/destinations';
import * as plan from '../modules/plan';
import * as view from '../modules/view';
import * as likes from '../modules/likes';
import * as isLogin from '../modules/isLogin';
import axios from 'axios';

function Schedule(props) {
  const { city } = props.match.params;
  const { flights, userPostings, blogPostings } = JSON.parse(localStorage.plan);
  let { article, history, isLogin } = props;
  const getArticle = (id) => {
    axios
      .get(`https://codeflights.xyz/post/article/${id}`)
      .then((res) => {
        article(res.data);
        localStorage.article = JSON.stringify(res.data);
      })
      .then(() => getLikes(id));
  };
  const getLikes = (id) => {
    axios.get(`https://codeflights.xyz/post/likes/${id}`).then((data) => {
      let likes = data.data.likes;
      props.likes(likes);
      localStorage.likes = JSON.stringify(likes);
      isLogin
        ? history.push(`/result/${city}/${id}`)
        : alert('로그인하시면 보실 수 있어요');
    });
  };


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
        <li className='article' onClick={() => getArticle(ele.id)}>
          <p className='articleTitle'>{ele.title}</p>
          <p className='articleContents'>{ele.contents}</p>

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
  props.loaded(null);
  return (
    <div className='schedule'>
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
    articleLoaded: state.view.articleLoaded,
    isLogin: state.isLogin.login,

  }),
  (dispatch) => ({
    destinationsCheck: (data) => dispatch(planCheck.destinationsCheck(data)),
    getPlan: (data) => dispatch(plan.getPlan(data)),
    loaded: (data) => dispatch(plan.loaded(data)),
    article: (data) => dispatch(view.view(data)),
    likes: (data) => dispatch(likes.likes(data)),
  })
)(Schedule);
