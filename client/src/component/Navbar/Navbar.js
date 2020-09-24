import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarNewUserData } from './NotLoginSidelist';
import { SidebarUserData } from './LoginSidelist';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import './Navbar.css';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { isLogin, modal } = props;

  if (isLogin) {
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
    );
  } else {
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
              {SidebarNewUserData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    
                      {item.icon}
                      <span onClick={props.handleModal}>{item.title}</span>
                    
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
  }
}

export default Navbar;
