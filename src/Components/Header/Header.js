import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import '../../assets/css/global.scss';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header-wrapper'>
          <Link to='/' className='logo'>
            Logo
          </Link>
          <div className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
