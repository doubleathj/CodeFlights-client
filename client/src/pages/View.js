import React from 'react';

import { Link } from 'react-router-dom';
import './View.css';
import * as view from '../modules/view';
import * as likes from '../modules/likes';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { connect } from 'react-redux';
import axios from 'axios';
import { SvgIcon } from '@material-ui/core';

function View(props) {

  let { city } = props.match.params;
  const { title, contents, id } = JSON.parse(localStorage.article);
  const totalLikes = props.numOfLikes;

  const handleClickLikes = () => {
    axios.post(`https://codeflights.xyz/post/likes/${id}`)
    .then(data => {
      console.log(data)
      props.likes(data.data.likes)})
  }
  return (
    <>
      <div className='view'>
        <div className='aticleview'>
          <h1>{title}</h1>
          <hr />
          <p>{contents}</p>
          <Link to={`/result/${city}`}>
            <button>목록으로 돌아가기</button>
          </Link>
          <div className='likebtn' onClick={handleClickLikes}>
            <span>
              <ThumbUpAltOutlinedIcon color='action' fontSize='small' />
              
            </span>

            {totalLikes}
          </div>
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
