import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Posting from './pages/Editor';
import axios from 'axios';
import './App.css';
import LikeBtn from './component/LikeBtn';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inLogin: false,
      userinfo: {},
    };
  }

  handleLogin() {
    this.setState({ isLogin: true });
    axios.get('http://codeflights/user/info').then((res) => {
      this.setState({ userinfo: res.data });
    });
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/Mypage' component={Mypage} />
            <Route path='/Posting' component={Posting} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
