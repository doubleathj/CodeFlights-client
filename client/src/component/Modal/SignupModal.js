import React from 'react';
import './Modal.css';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password_confirm: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
  }
  goToLogin = () => {
    this.props.handleSignupModal();
    this.props.handleLoginModal();
  }
  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignupSubmit(e) {
    const { email, username, password, passwordConfirm } = this.state;

      axios({
        method: 'post',
        url: 'http://15.164.229.68:80/user/signup',
        data: {
          email: email,
          username: username,
          password: password,
          passwordConfirm: passwordConfirm,
        },
        withCredentials: true,
        crendtials : 'include'
      })
      .then(() => {
        this.props.history.push('/');
        this.props.handleSignupModal()
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
          <form onSubmit={this.handleSignupSubmit}>
          <h3 onClick={this.props.handleSignupModal}>✖</h3>
          <h2>회원가입</h2>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChange('email')}
            />
            <input
              type='username'
              name='username'
              placeholder='username'
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
            <input
              type='password'
              minLength='8'
              name='password'
              placeholder='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
            <input
              type='password'
              minLength='8'
              name='passwordConfirm'
              placeholder='passwordConfirm'
              value={this.state.passwordConfirm}
              onChange={this.handleChange('passwordConfirm')}
            />
            <button type='submit'>submit</button>
            <div>
              <p onClick={this.goToLogin}>이미 아이디가 있으신가요?</p>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupModal);
