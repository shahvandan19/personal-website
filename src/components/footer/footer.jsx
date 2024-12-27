import React from 'react';
import './footer.css';
import logo from '../../data/m_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Vandan Shah Logo" className="footer-logo" />
        </div>
        <div className="footer-center">
          <nav>
            <ul className="footer-nav">
              <li><a href="#home">Home</a></li>
              <li><a href="#about_me">About Me</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#bookshelf">Bookshelf</a></li>
              {/* <li><a href="#projects">Projects</a></li> */}
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer-right">
          <p>© {new Date().getFullYear()} Vandan Shah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
