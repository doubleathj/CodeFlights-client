import React from 'react';

class LikeBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
    this.likes = this.addLikes.bind(this);
  }

  addLikes() {
    this.setState({
      likes: this.state.likes + 1,
    });
  }

  render() {
    return <button onClick={this.likes}>Like {this.state.likes} </button>;
  }
}

export default LikeBtn;
