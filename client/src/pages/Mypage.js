import React from 'react';
import './Mypage.css';
import axios from 'axios';
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

  handlePasswordMatch() {
    const { password, passwordConfirm } = this.state;
    return password === passwordConfirm;
  }

  renderPasswordCheckMessage() {
    const { passwordConfirm } = this.state;

    if (passwordConfirm) {
      if (!this.handlePasswordMatch()) {
        return (
          <div className='invaild-message'>패스워드가 일치하지 않습니다.</div>
        );
      }
    }
  }

  handleChangeUserInfoSubmit(e) {
    const { username, password } = this.state;
    axios({
      method: 'POST',
      url: 'https://codeflights.xyz/user/info',
      data: {
        username: username,
        password: password,
      },
    })
      // .then((res) => {
      //   this.props.history.push('/');
      // }) 세션 문제 해결 후 테스트
      .catch((err) => {
        console.log('err: ', err);
      });
    e.preventDefault();
  }

  render() {
    const { info } = this.props;
    console.log(info);
    return (
      <div className='mypage'>
        <div className='userinfo-container'>
          <div className='userinfo'>
            <span className='usertitle'>
              <h1>Mypage</h1>
            </span>
            <h3>
              username:
              <span className='username'>{info.username}</span>
            </h3>
            <h3>
              email:
              <span className='email'>{info.email}</span>
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
                {this.renderPasswordCheckMessage()}
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
    info: state.user.info,
  }),
  (dispatch) => ({
    userinfo: () => dispatch(userActions.userinfo()),
  })
)(Mypage);
