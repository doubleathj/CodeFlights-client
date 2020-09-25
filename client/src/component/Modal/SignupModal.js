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

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignupSubmit(e) {
    const { email, username, password, passwordConfirm } = this.state;

      axios({
        method: 'post',
        url: 'http://15.164.229.68:8080/user/signup',
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
            <div>
              <Link to='/'>이미 아이디가 있으신가요??</Link>
            </div>
            <button type='submit'>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupModal);
