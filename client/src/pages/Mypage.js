import React from 'react';
import './Mypage.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

axios.defaults.withCredentials = true;

class Mypage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password_confirm: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeUserInfoSubmit = this.handleChangeUserInfoSubmit.bind(
      this
    );
  }

  handleChange = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleChangeUserInfoSubmit(e) {
    const { username, password, passwordConfirm } = this.state;

    axios
      .post('http://codeflight.com/user/info', {
        username: username,
        password: password,
        passwordConfirm: passwordConfirm,
      })
      .then(() => {
        this.props.history.push('/Mypage');
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    e.preventDefault();
  }

  render() {
    const { isLogin, userinfo } = this.state;

    // if (isLogin)
    {
      return (
        <>
          <div className='UserInfo'>
            <h1>Mypage</h1>
            <h3>
              username
              {/* <div className='username'>{userinfo.username}</div> */}
            </h3>
            <h3>
              email
              {/* <div className='email'>{userinfo.email}</div> */}
            </h3>
          </div>
          <hr />
          <div className='ChangeUserInfo'>
            <h1>회원정보 수정</h1>
            <form onSubmit={this.handleChangeUserInfoSubmit}>
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
                <button className='submitBtn' type='submit'>
                  submit
                </button>
              </div>
            </form>
          </div>
        </>
      );
    }
    //  else {
    //     return (
    //     <>
    //         <div>
    //           <h1>회원가입이 필요한 서비스입니다</h1>
    //           <button className='signupbtn'>회원가입</button>
    //           <button className='loginbtn'>로그인</button>
    //         </div>
    //     </>
    //       );
    //     }
  }
}
export default withRouter(Mypage);
