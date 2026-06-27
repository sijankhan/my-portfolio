import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container flex items-center justify-between">
        <a href="#" className="logo text-gradient">AI Web Studio</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
