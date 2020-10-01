import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Posting from './pages/Editor';
import './App.css';
import axios from 'axios'
import Result from './pages/Result';
import Schedule from './pages/Schedule';
import View from './pages/View';
import LoginModal from './component/Modal/LoginModal';
import SignupModal from './component/Modal/SignupModal';
import { connect } from 'react-redux'
import * as signinActions from './modules/isLogin';
import * as userActions from './modules/user';
axios.defaults.withCredentials = true;
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    axios({
      method: 'GET',
      url: 'https://codeflights.xyz/user/info',
      withCredentials: true,
      crendtials: 'include',
    }).then((res) => {
      this.props.userinfo(res.data)
      this.props.loginStatus()
    }).catch(() => (console.log('not logged')))
  }

  render() {
    return (
      <>
        <Router>
          <video
          className='video'
          autoPlay='true' //모바일 재생 필수 태그
          playsInline='true' //모바일 재생 필수 태그
          loop='loop'
          muted='true' //모바일 재생 필수 태그 ios 저전력 모드일 때는 작동 불가 애플 정책
          width='1280'
          height='720'
          >
            <source src='/Videos/background.mp4' type='video/mp4' />
          </video>
          <Navbar />
          <SignupModal />
          <LoginModal />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/Mypage' component={Mypage} />
            <Route path='/Posting' component={Posting} />
            <Route path='/result/:city/:article' component={View} />
            <Route path='/result/:city' component={Schedule} />
            <Route path='/search/result' component={Result} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default connect(
  (state) => ({
    isLogin: state.isLogin.isLogin,
    info: state.user.userinfo,
  }),
  (dispatch) => ({
    loginStatus: () => dispatch(signinActions.loginStatus()),
    userinfo: (data) => dispatch(userActions.userinfo(data)),
  })
)(App);
