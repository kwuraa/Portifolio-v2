import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/Navbar.css"
import { FaArrowDown } from 'react-icons/fa';

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
    if(window.scrollY > 50) {
        setIsManuallyOpen(false)
        setIsHidden(true)
    } else {
      setIsHidden(false)
      setIsManuallyOpen(false)
    }
  }
  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePeekNavbar = () => {
    setIsHidden(false);        
    setIsManuallyOpen(true);   
  };

  return (
    <>
    <nav>
      <div className={`nav-pill ${isHidden ? 'hidden' : ''} ${isManuallyOpen ? 'open' : ''}`}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link color-highlight">Contact Me</a>
      </div>
    </nav>

    <button 
        className={`nav-toggle-btn ${isHidden ? 'visible' : ''}`}
        onClick={handlePeekNavbar}
        aria-label="Mostrar menu"
      >
        <FaArrowDown className='nav-icon' size={38}/>
      </button>
    </>
  );
};
