import React from 'react';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Posting from './pages/Editor';

import './App.css';

function App() {
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

export default App;
