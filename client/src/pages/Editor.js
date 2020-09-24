import React from 'react';
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
    // return axios
    //   .post('http://codeflights.com/post/write', {
    //     author: this.state.author + 1,
    //     title: this.state.title,
    //     content: this.state.content,
    //   })
    console.log(this.state.title);
    console.log(this.state.content);
  }

  render() {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.postingArticle();
          }}
        >
          <p
            className='post_title'
            style={{
              borderBottom: '1px solid rgba(0,0,0,0.2)',
              paddingBottom: '1.5rem',
            }}
          >
            <textarea
              style={{
                width: '70%',
                height: '3rem',
                margin: '1rem',
                padding: '1rem',
                borderRadius: '5px',
                resize: 'none',
                border: 'none',
                outline: 'none',
                fontSize: '1.5rem',
              }}
              className='textarea_title'
              placeholder='제목을 입력하세요'
              onChange={this.handleChange('title')}
            ></textarea>
          </p>
          <p>
            <textarea
              style={{
                width: '70%',
                margin: '1rem',
                padding: '1rem',
                borderRadius: '5px',
                resize: 'none',
                border: 'none',
                outline: 'none',
              }}
              rows={20}
              className='textarea_content'
              onChange={this.handleChange('content')}
            ></textarea>
          </p>
          <button
            style={{
              borderRadius: '5px',
              backgroundColor: '#99ccff',
              float: 'right',
              margin: '1rem',
              padding: '0.5rem',
              color: 'white',
              border: 'none',
            }}
            type='submit'
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Posting;
