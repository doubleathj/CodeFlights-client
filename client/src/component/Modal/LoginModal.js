import React from 'react';
import './Modal.css';
import axios from 'axios';
import { connect } from 'react-redux';
import * as loginActions from '../../modules/loginModal';
import * as signupActions from '../../modules/signupModal';
import * as signinActions from '../../modules/isLogin';
import * as userActions from '../../modules/user';
import GoogleLogin from 'react-google-login';

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

  handleLoginSubmit(e) {
    const { email, password } = this.state;
    console.log('submit');
    let data = { email: email, password: password };
    axios
      .post('https://codeflights.xyz/user/signin', data, {
        withCredentials: true,
      })
      .then((res) => {
        this.props.userinfo(res.data);
        localStorage.userinfo = JSON.stringify(res.data);
        this.props.loginStatus();
        this.props.changeLogin();
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    e.preventDefault();
  }

  responseGoogle = (res) => {
    this.props.changeLogin();
    let data = { tokenId: res.tokenId };
    console.log(data);
    axios.post('https://codeflights.xyz/auth/google', data).then((data) => {
      this.props.userinfo(data.data);
      this.props.loginStatus();
    });
  };
  render() {
    const { loginModal } = this.props;
    if (loginModal) {
      return (
        <div>
          <div className='modal'></div>
          <div className='modalContents'>
            <form className='modalForm' onSubmit={this.handleLoginSubmit}>
              <div className='login'>
                <h3 onClick={this.props.changeLogin}>✖</h3>
                <h2>로그인</h2>
              </div>
              <GoogleLogin
                clientId='956886343865-f8080heu2d93mukf82e027btrg0mgcl8.apps.googleusercontent.com'
                buttonText='Login'
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
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
    } else {
      return <div></div>;
    }
  }
}

export default connect(
  (state) => ({
    loginModal: state.loginModal.loginModal,
    signupModal: state.signupModal.signupModal,
    isLogin: state.isLogin.isLogin,
    userinfo: state.user.userinfo,
  }),
  (dispatch) => ({
    changeLogin: () => dispatch(loginActions.changeLogin()),
    changeSignup: () => dispatch(signupActions.changeSignup()),
    loginStatus: () => dispatch(signinActions.loginStatus()),
    userinfo: (data) => dispatch(userActions.userinfo(data)),
  })
)(LoginModal);
