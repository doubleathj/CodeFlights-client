import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import Navbar from './component/Navbar/Navbar';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Posting from './pages/Editor';
import './App.css';
import Result from './pages/Result';
import Schedule from './pages/Schedule';
import View from './pages/View';
import LoginModal from './component/Modal/LoginModal';
import SignupModal from './component/Modal/SignupModal';
import * as signinActions from './modules/isLogin';
import * as userActions from './modules/user';
import * as sidebarActions from './modules/navbar';

axios.defaults.withCredentials = true;
class App extends React.Component {
  componentDidMount() {
    const { userinfo, loginStatus } = this.props;
    axios({
      method: 'GET',
      url: 'https://codeflights.xyz/user/info',
      withCredentials: true,
      crendtials: 'include',
    })
      .then((res) => {
        userinfo(res.data);
        localStorage.userinfo = JSON.stringify(res.data);
        loginStatus();
      })
      .catch();
  }

  render() {
    const info = this.state;
    const { sidebar } = this.props;
    return (
      <>
        <Router>
          <div className='App-component'>
            <video
              className='video'
              autoPlay
              playsInline
              loop='loop'
              muted
              width='1280'
              height='720'
            >
              <source src='/Videos/background.mp4' type='video/mp4' />
            </video>
            <div className={info && 'test'}>
              <Navbar />
              <SignupModal />
              <LoginModal />
              <div className={sidebar && 'App-contents'}>
                <Switch>
                  <Route path='/' exact component={Main} />
                  <Route path='/Mypage' component={Mypage} />
                  <Route path='/Posting' component={Posting} />
                  <Route path='/result/:city/:article' component={View} />
                  <Route path='/result/:city' component={Schedule} />
                  <Route path='/search/result' component={Result} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default connect(
  (state) => ({
    isLogin: state.isLogin.isLogin,
    info: state.user.userinfo,
    sidebar: state.navbar.sidebar,
  }),
  (dispatch) => ({
    loginStatus: () => dispatch(signinActions.loginStatus()),
    userinfo: (data) => dispatch(userActions.userinfo(data)),
    changeSidebar: () => dispatch(sidebarActions.changeSidebar()),
  }),
)(App);
