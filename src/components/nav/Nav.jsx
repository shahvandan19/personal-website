import React, { useState } from 'react';
import './Nav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = () => {
  const [menu, setMenu] = useState('home');

  return (
    <header className="Nav">
      {/* Removed logo section */}
      <nav>
        <ul className="nav-menu">
          <li>
            <AnchorLink href="#home" onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about_me" onClick={() => setMenu('about_me')} className={menu === 'about_me' ? 'active' : ''}>
              About Me
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#experience" onClick={() => setMenu('experience')} className={menu === 'experience' ? 'active' : ''}>
              Experience
            </AnchorLink>
          </li>
          {/* <li>
            <AnchorLink href="#projects" onClick={() => setMenu('projects')} className={menu === 'projects' ? 'active' : ''}>
              Projects
            </AnchorLink>
          </li> */}
          <li>
            <AnchorLink href="#bookshelf" onClick={() => setMenu('bookshelf')} className={menu === 'bookshelf' ? 'active' : ''}>
              Bookshelf
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact" onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>
              Contact
            </AnchorLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;