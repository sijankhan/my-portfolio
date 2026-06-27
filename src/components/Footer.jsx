import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top flex items-center justify-between">
          <a href="#" className="logo text-gradient">AI Web Studio</a>
          <div className="footer-links">
            <a href="mailto:nibirmon8@gmail.com">📧 Email</a>
            <a href="https://wa.me/8801871931303?text=Hi%2C%20I%20want%20to%20enquire%20about%20a%20website." target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            <a href="https://www.fiverr.com/nibirmon8" target="_blank" rel="noopener noreferrer">🟢 Fiverr</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-secondary">&copy; {new Date().getFullYear()} MD Nahid Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
