import React from 'react';
import { Icon } from '../../atoms/Icons';
import "./index.scss";

export const NavBar = () => {
  return (
    <nav className='navbar flex justify-between items-center mx-24 max-[980px]:mx-10 max-[500px]:mx-4 '>
      <div className='logo flex items-center'>
        <Icon name="logo" />
        <p className='logo-name'>MovieBox</p>
      </div>
      <div className='search'>
        <input type='search' className='input' placeholder='What do you want to watch' id="search" />
        <Icon name="search" className="search-icon " />
      </div>
      <div className='signin-menu flex items-center'>
        <p className='sign-in'>Sign in</p>
        <Icon name="menu" />
      </div>
    </nav>
  )
}
