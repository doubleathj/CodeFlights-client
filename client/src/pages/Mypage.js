import React from 'react';
import './Mypage.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../modules/user';
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
    axios({
      method: 'POST',
      url: 'http://localhost:8080/user/info',
      data: {
        username: username,
        password: password,
      },
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
    const { userinfo } = this.props;

    return (
      <div className='mypage'>
        <video muted play='true' autoPlay loop>
          <source src='/Videos/background.mp4' type='video/mp4'></source>
        </video>
        <div className='userinfo-container'>
          <div className='userinfo'>
            <span className='usertitle'>
              <h1>Mypage</h1>
            </span>
            <h3>
              username:
              <span className='username'>{userinfo.username}</span>
            </h3>
            <h3>
              email:
              <span className='email'>{userinfo.email}</span>
            </h3>
          </div>
          <hr />
          <div className='changeinfo-container'>
            <span className='changeinfotitle'>
              <h1>회원정보 수정</h1>
            </span>

            <form
              className='changeinfo'
              onSubmit={this.handleChangeUserInfoSubmit}
            >
              <input
                type='username'
                name='username'
                placeholder='변경할 닉네임을 입력하세요'
                value={this.state.username}
                onChange={this.handleChange('username')}
              />
              <input
                type='password'
                minLength='8'
                name='password'
                placeholder='변경할 비밀번호를 입력하세요'
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
              <input
                type='password'
                minLength='8'
                name='passwordConfirm'
                placeholder='비밀번호를 다시 한번 입력하세요'
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
        </div>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    userinfo: state.user.userinfo,
  }),
  (dispatch) => ({
    userinfo: () => dispatch(userActions.userinfo()),
  })
)(Mypage);
