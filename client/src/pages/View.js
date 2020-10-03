import React from 'react';
import { data } from '../Datas/Dummy';
import { Link } from 'react-router-dom';
import './View.css';
import * as view from '../modules/view';
import { connect } from 'react-redux';

function View(props) {
  let { city } = props.match.params;
  const { title, contents }= JSON.parse(localStorage.article)
  

  return (
    <>
      <div className='view'>
        <div className='aticleview'>
          <h1>{title}</h1>
          <hr />
          <p>{contents}</p>
          <Link to={`/result/${city}`}>
            <button>목록</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default connect(
  (state) => ({
    articleContent : state.view.article
  }),
  (dispatch) => ({
    article : (data) => dispatch(view.view(data))
  })
)(View);
