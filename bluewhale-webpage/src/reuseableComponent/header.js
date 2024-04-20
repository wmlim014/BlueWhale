// src/Header.js
import React from 'react';
import './styles/header.css';
import logo from '../Images/Logo/RoundLogo_whiteBackground.png';

const Header = () => {
  return (
    <header>
      <img src={logo} className="header-logo" alt="logo" />
      <nav>
        <ul>
            <li><a href="/my-favourite">My Favourite</a></li>
            <li><a href="/profile">Profile</a></li>
            {/* <li><a href="/contact">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
