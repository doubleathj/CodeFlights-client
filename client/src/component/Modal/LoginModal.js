import React from 'react';
import './Modal.css';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  goToSignUp = () => {
    this.props.handleLoginModal();
    this.props.handleSignupModal();
  };
  handleLoginSubmit(e) {
    const { email, password } = this.state;
    const { handleLogin, handleLoginModal } = this.props;

    let data = { email: email, password: password };
    axios
      .post('https://codeflights.xyz/user/signin', data, {
        withCredentials: true,
      })

      // fetch('http://15.164.229.68:8080/user/signin', {
      //   method : 'POST',
      //   body : JSON.stringify({ email : email, password : password}),
      //   headers : {
      //     "contents-type" : "application/json"
      //   },
      //   credentials : "include"
      // })
      .then(() => {
        handleLogin();
        this.props.history.push('/');
        handleLoginModal();
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className='modal'></div>
        <div className='modalContents'>
          <form className='modalForm' onSubmit={this.handleLoginSubmit}>
            <h3 onClick={this.props.handleLoginModal}>✖</h3>
            <h2>로그인</h2>

            <input
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
            <input
              type='password'
              minLength='8'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
            <button type='submit'>Login</button>
            <div>
              <p onClick={this.goToSignUp}>아직 아이디가 없으신가요?</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginModal);
