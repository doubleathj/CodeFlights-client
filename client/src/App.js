import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Posting from './pages/Editor';
import Result from './pages/Result';
import Schedule from './pages/Schedule';
import './App.css';
import LikeBtn from './component/LikeBtn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/Mypage' component={Mypage} />
          <Route path='/Posting' component={Posting} />
          <Route path='/result/:city' component={Schedule} />
          <Route path='/result' component={Result} />
        </Switch>
      </Router>
      <LikeBtn />
    </>
  );
}

export default App;
