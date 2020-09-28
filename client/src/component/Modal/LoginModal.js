import React from 'react';
import './Modal.css';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as loginActions from '../../modules/loginModal';
import * as signupActions from '../../modules/signupModal';
import * as signinActions from '../../modules/isLogin';
import * as userActions from '../../modules/user';

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
    this.props.changeLogin();
    this.props.changeSignup();
  };
  updateUserinfo = () => {
    axios({
      method: 'GET',
      url: 'http://localhost:8080/user/info',
      withCredentials: true,
      crendtials : 'include'
    }).then(res => {
      this.props.userinfo(res)
    })
  }
  handleLoginSubmit(e) {
    const { email, password } = this.state;
    let data = { email: email, password: password };
    axios
      .post('http://localhost:8080/user/signin', data, {
        withCredentials: true,
      })
      .then(() => {
        this.props.loginStatus();
        this.props.changeLogin();
        this.updateUserinfo();
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    e.preventDefault();
  }

  render() {
    const { loginModal } = this.props
    if(loginModal){
    return (
      <div>
        <div className='modal'></div>
        <div className='modalContents'>
          <form className='modalForm' onSubmit={this.handleLoginSubmit}>
            <h3 onClick={this.props.changeLogin}>✖</h3>
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
    }else {
      return <div></div>
    }
  }
}

export default connect((state) => ({
  loginModal: state.loginModal.loginModal,
  signupModal : state.signupModal.signupModal,
  isLogin : state.isLogin.isLogin,
  userinfo : state.user.userinfo,
}), (dispatch) => ({
  changeLogin: () => dispatch(loginActions.changeLogin()), changeSignup : () => dispatch(signupActions.changeSignup()), loginStatus : () => dispatch(signinActions.loginStatus()), userinfo : () => dispatch(userActions.userinfo())
}))(LoginModal);