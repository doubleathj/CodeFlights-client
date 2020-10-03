import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarUserData } from './LoginSidelist';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';
import { connect } from 'react-redux';
import * as loginActions from '../../modules/loginModal';
import * as signupActions from '../../modules/signupModal';
import * as signinActions from '../../modules/isLogin';
import * as sidebarActions from '../../modules/navbar';
import logo from '../../Images/logo.png';
import './Navbar.css';
import axios from 'axios';

function Navbar(props) {
  // const [sidebar, setSidebar] = useState(false);
  // const changeSidebar() = () => setSidebar(!sidebar);

  const { login } = props;
  let logOut = () => {
    props.loginStatus();
    axios.post('https://codeflights.xyz/user/logout');
  };

  if (login) {
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='/' >
              <img src={logo} className='logo focus' />
            </Link>
            <p className="welcome blink">행복한 상상중인 {props.username.username} 여행자님</p>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={props.changeSidebar} />
            </Link>
          </div>
          <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={props.changeSidebar}>
              <li className='navbar-toggle'></li>
              {SidebarUserData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li onClick={logOut} className='nav-text'>
                <Link to='/'>
                  <FaIcons.FaSignOutAlt />
                  <span>LOGOUT</span>
                </Link>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  } else {
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='/'>
              <img src={logo} className='logo' />
            </Link>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={props.changeSidebar} />
            </Link>
          </div>
          <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={props.changeSidebar}>
              <li className='navbar-toggle'></li>
              <li className='nav-text'>
                <FaIcons.FaHome />
                <span>
                  <Link to='/'>Main</Link>
                </span>
              </li>
              <li className='nav-text'>
                <FiIcons.FiUserPlus />
                <span onClick={props.changeSignup}>
                  <Link to='#'>SIGN UP</Link>
                </span>
              </li>
              <li className='nav-text'>
                <IoIcons.IoIosLogIn />
                <span onClick={props.changeLogin}>
                  <Link to='#'>LOGIN</Link>
                </span>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
}

export default connect(
  (state) => ({
    loginModal: state.loginModal.loginModal,
    signupModal: state.signupModal.signupModal,
    login: state.isLogin.login,
    sidebar: state.navbar.sidebar,
    username : state.user.info
  }),
  (dispatch) => ({
    changeLogin: () => dispatch(loginActions.changeLogin()),
    changeSignup: () => dispatch(signupActions.changeSignup()),
    loginStatus: () => dispatch(signinActions.loginStatus()),
    changeSidebar: () => dispatch(sidebarActions.changeSidebar()),
  })
)(Navbar);
