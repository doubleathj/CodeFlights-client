import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Router>
        <div className='App-component'>
          <video
            className='video'
            autoPlay
            playsInline
            loop={true}
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
      </Router> */}
    </div>
  );
}
