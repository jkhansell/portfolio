import React from 'react';
import '@/styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="portfolio-container nav-wrapper">
        <div className="nav-logo">JV.Dev</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;