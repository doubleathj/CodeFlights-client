import React from 'react';
import './Editor.css';
const axios = require('axios');

class Posting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      title: '',
      content: '',
      // board : [{author : null, title : null, content : null}]
    };
    this.handleChange = this.handleChange.bind(this);
    this.postingArticle = this.postingArticle.bind(this);
  }

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  postingArticle() {
    return axios.post('https://codeflights.xyz/post/write', {
      author: this.state.author + 1,
      title: this.state.title,
      content: this.state.content,
    });
  }

  render() {
    return (
      <div className='editor'>
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
        <div className='article-container'>
          <form
            className='article'
            onSubmit={(e) => {
              e.preventDefault();
              this.postingArticle();
            }}
          >
            <input
              type='text'
              className='title'
              placeholder='제목을 입력하세요'
              onChange={this.handleChange('title')}
            ></input>
            <textarea
              className='contents'
              rows={15}
              placeholder='내용을 입력하세요'
              onChange={this.handleChange('content')}
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Posting;
