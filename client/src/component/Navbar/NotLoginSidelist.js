import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as FiIcons from 'react-icons/fi';

export const SidebarNewUserData = [
  {
    title: 'Main',
    path: '/',
    icon: <FaIcons.FaHome />,
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
];
