import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { SidebarUserData } from './LoginSidelist';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';

import './Navbar.css';

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { isLogin } = props;

  // if (isLogin)
  //  {
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
  // } else {
  //   return (
  //     <>
  //       <IconContext.Provider value={{ color: '#fff' }}>
  //         <div className='navbar'>
  //           <Link to='#' className='menu-bars'>
  //             <FaIcons.FaBars onClick={showSidebar} />
  //           </Link>
  //         </div>
  //         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
  //           <ul className='nav-menu-items' onClick={showSidebar}>
  //             <li className='navbar-toggle'>
  //               <Link to='#' className='menu-bars'>
  //                 <FaIcons.FaWindowClose />
  //               </Link>
  //             </li>
  //             <li className='nav-text'>
  //               <FaIcons.FaHome />
  //               <span>Main</span>
  //             </li>
  //             <li className='nav-text'>
  //               <FiIcons.FiUserPlus />
  //               <span onClick={props.handleSignupModal}>SIGN UP</span>
  //             </li>
  //             <li className='nav-text'>
  //               <IoIcons.IoIosLogIn />
  //               <span onClick={props.handleLoginModal}>LOGIN</span>
  //             </li>
  //           </ul>
  //         </nav>
  //       </IconContext.Provider>
  //     </>
  //   );
  // }
}

export default Navbar;
