import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';

export const SidebarData = [
  {
    title: 'Main',
    path: '/',
    icon: <FaIcons.FaHome />,
    className: 'nav-text',
  },
  {
    title: 'My Page',
    path: '/mypage',
    icon: <FaIcons.FaUserCircle />,
    className: 'nav-text',
  },
  {
    title: 'SIGN UP',
    path: '/signup',
    icon: <FiIcons.FiUserPlus />,
    className: 'nav-text',
  },
  {
    title: 'SIGN IN',
    path: '/signin',
    icon: <IoIcons.IoIosLogIn />,
    className: 'nav-text',
  },
  {
    title: 'POSTING',
    path: '/posting',
    icon: <FaIcons.FaTelegramPlane />,
    className: 'nav-text',
  },
];
