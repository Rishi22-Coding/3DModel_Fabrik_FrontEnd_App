import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <BiIcons.BiLogIn />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <FaIcons.FaRegRegistered />,
    cName: 'nav-text'
  }

];