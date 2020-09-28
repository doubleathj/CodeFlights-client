import React from 'react';
import './Schedule.css';
import { Link } from 'react-router-dom';
import { data } from '../Datas/Dummy';
import axios from 'axios';
import user from '../modules/user';
function Schedule({ match }) {
  const { city } = match.params;
  let init = () => {
  axios.get(`http://codeflights.xyz/search/result/destination?city=${city}`)
    .then(res => {
      const { flights, blogPostings, userPostings } = res.data
      let counter = 10 - userPostings.length;
      
      let tickets = flights.map(ele => (
        <li className='ticket'>
          <div>{ele.carrier}</div>
          <div>{ele.carrierNo}</div>
          <div>{ele.departure}</div>
        </li>
      ))
      
      let userPost = userPostings.map(ele => (
        <li className='article'>
          <Link className='view' to={`/result/${city}/${ele.id}`}>
            <p className="title">{ele.title}</p>
            <p className="contents">{ele.contents}</p>
          </Link>
        </li>
      ))
      let blog =[];
      for(let i = 0; i < counter; i++){
          blog[i] = <li className='article'>
        <a className='view' href={blogPostings[i].link}>
        <p className="title">{blogPostings[i].title}</p>
          <p className="contents">{blogPostings[i].contents}</p>
        </a>         
      </li>
      }
      console.log(tickets, blog, userPost)
      return (
        <div className='schedule'>
      <video muted play='true' autoPlay loop>
        <source src='/Videos/background.mp4' type='video/mp4'></source>
      </video>
      <div className='schedule-containaer'>
        <div className='info'>
          <h2>{city}로 가는 항공편</h2>
        </div>
        <ul className='ticket-container'>{tickets}</ul>
        <div className='tip'>
          <h2>{city}의 여행 팁</h2>
        </div>
      <ul className='article-container'>{userPost}{blog}</ul>
        
      </div>
    </div>
      )
    })
  }

  return (
    <div>{
      init()
    }</div>
  )
}
export default Schedule;
