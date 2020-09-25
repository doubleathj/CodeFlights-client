import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Posting from './pages/Editor';
import axios from 'axios';
import './App.css';
import Signup from './component/Signup';
import Login from './component/Login';
import Result from './pages/Result';
import Schedule from './pages/Schedule';
import View from './pages/View';
import LoginModal from './component/Modal/LoginModal';
import SignupModal from './component/Modal/SignupModal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userinfo: {},
      signupmodal: false,
      loginmodal: false,
    };
  }

  handleLogin() {
    this.setState({ isLogin: true });

    axios({
      method: 'GET',
      url: 'http://15.164.229.68:8080/user/info',
      withCredentials: true,
      crendtials : 'include'
    }).then(res => this.setState({userinfo : res.data}))
  }

  handleSignupModal = () => {
    this.setState({ signupmodal: !this.state.signupmodal });
  };

  handleLoginModal = () => {
    this.setState({ loginmodal: !this.state.loginmodal });
  };

  

  render() {
    return (
      <>
        <Router>
          <Navbar
            isLogin={this.state.isLogin}
            handleSignupModal={this.handleSignupModal}
            handleLoginModal={this.handleLoginModal}
          />
          {this.state.signupmodal ? <SignupModal handleSignupModal={this.handleSignupModal.bind(this)} /> : false}
          {this.state.loginmodal ? <LoginModal handleLoginModal={this.handleLoginModal.bind(this)} handleLogin={this.handleLogin.bind(this)}/> : false}
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/Mypage' component={Mypage} />
            <Route path='/Posting' component={Posting} />
            <Route path='/Signup' component={Signup} />
            <Route path='/Login' component={Login} />
            <Route path='/result/:city/:article' component={View} />
            <Route path='/result/:city' component={Schedule} />
            <Route path='/result' component={Result} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
