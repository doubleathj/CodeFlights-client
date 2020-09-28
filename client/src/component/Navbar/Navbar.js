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
import './Navbar.css';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const { login }= props;

  if (login){
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaWindowClose />
              </Link>
            </li>
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
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )} else {
    return (
      <>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <FaIcons.FaWindowClose />
                </Link>
              </li>
              <li className='nav-text'>
                <FaIcons.FaHome />
                
                <span><Link to='/'>Main</Link></span>
                
              </li>
              <li className='nav-text'>
                <FiIcons.FiUserPlus />
                <span onClick={props.changeSignup}><Link>SIGN UP</Link></span>
              </li>
              <li className='nav-text'>
                <IoIcons.IoIosLogIn />
                <span onClick={props.changeLogin}><Link>LOGIN</Link></span>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
}

export default connect((state) => ({
  loginModal: state.loginModal.loginModal,
  signupModal : state.signupModal.signupModal,
  login : state.isLogin.login
}), (dispatch) => ({
  changeLogin: () => dispatch(loginActions.changeLogin()), changeSignup : () => dispatch(signupActions.changeSignup()), loginStatus : () => dispatch(signinActions.loginStatus()),
}))(Navbar);