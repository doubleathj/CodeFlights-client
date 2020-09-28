import React from 'react'
import { data } from '../Datas/Dummy'
import { Link } from 'react-router-dom';

function View( { match } ) {
  let { article, city } = match.params
  let articles = data[city].articles;
  let title, contents
  articles.forEach(ele => {
    if(ele.id === Number(article)){
      title = ele.title
      contents = ele.contents
    }
  })
  
  return (
    <div><h1>{title}</h1><p>{contents}</p><Link to={`/result/${city}`}><button>목록</button></Link></div>
  )
}

export default View;