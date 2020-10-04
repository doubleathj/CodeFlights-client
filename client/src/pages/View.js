import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './View.css';
import * as view from '../modules/view';
import * as likes from '../modules/likes';
import { connect } from 'react-redux';
import axios from 'axios';
import Heart from 'react-animated-heart';

function View(props) {
  let { city } = props.match.params;
  const { title, contents, id } = JSON.parse(localStorage.article);
  const totalLikes = props.numOfLikes;

  const [isClick, setClick] = useState(false);

  const handleClickLikes = () => {
    axios.post(`https://codeflights.xyz/post/likes/${id}`).then((data) => {
      console.log(data);
      props.likes(data.data.likes);
    });
  };

  return (
    <>
      <div className='view'>
        <div className='articleTitle'>{title}</div>
        <hr />
        <div className='aticleContents'>{contents}</div>
        <hr />
        <div className='articleFooter'>
          <Link to={`/result/${city}`}>
            <button className='gobacklist'>목록으로 돌아가기</button>
          </Link>

          <button className='likebox' onClick={handleClickLikes}>
            <span
              className='heart'
              isClick={isClick}
              onClick={() => setClick(!isClick)}
            ></span>
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
            <span className='like'> Like</span>
            <span className='numb'>{totalLikes}</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default connect(
  (state) => ({
    articleContent: state.view.article,
    numOfLikes: state.likes.likes,
  }),
  (dispatch) => ({
    article: (data) => dispatch(view.view(data)),
    likes: (data) => dispatch(likes.likes(data)),
  })
)(View);
