import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">GREENMIND</div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#products">Products</a></li>
        <li className="navbar-item"><a href="#contacts">Contacts</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="#cart" className="navbar-icon">🛒</a>
        <a href="#profile" className="navbar-icon">👤</a>
        <a href="#menu" className="navbar-icon">☰</a>
      </div>
    </nav>
  );
};

export default Navbar;