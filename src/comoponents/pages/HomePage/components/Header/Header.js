import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <span className="header-item">Hotline: +01 234 567 890</span>
        <span className="header-separator">|</span>
        <span className="header-item"> Chat </span>
        <span className="header-separator">|</span>
        <span className="header-item">Contact Us</span>
      </div>
      <div className="right-section">
        <span className="header-item">Log In</span>
        <span className="header-separator">|</span>
        <span className="header-item">Register</span>
      </div>
    </header>
  );
};

export default Header;
