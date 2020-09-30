import React from 'react';
import { data } from '../Datas/Dummy';
import { Link } from 'react-router-dom';
import './View.css';

function View({ match }) {
  let { article, city } = match.params;
  let articles = data[city].articles;
  let title, contents;
  articles.forEach((ele) => {
    if (ele.id === Number(article)) {
      title = ele.title;
      contents = ele.contents;
    }
  });

  return (
    <>
      <div className='view'>
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

export default View;
