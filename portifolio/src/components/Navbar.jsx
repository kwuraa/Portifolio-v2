import React from 'react';
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-pill">
        <a href="#home" className="nav-link">Home</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link color-highlight">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;