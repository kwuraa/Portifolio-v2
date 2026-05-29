import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/Navbar.css"
import { FaArrowDown } from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";
import { TbFoldersFilled } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [isManuallyOpen, setIsManuallyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () =>{
    if (window.innerWidth > 768) {
        if (window.scrollY > 50) {
          setIsManuallyOpen(false); 
          setIsHidden(true);
        } else {
          setIsHidden(false);
          setIsManuallyOpen(false);
        }
      }
    };
  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePeekNavbar = () => {
    setIsHidden(false);        
    setIsManuallyOpen(true);   
  };

  return (
    <header>
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

      <section className="dock-container-mobile">
        <nav className="dock">
          <a href="#hero" className="dock-item"><span className="dock-icon"><AiFillHome size={38}/></span></a>
          <a href="#projects" className="dock-item"><span className="dock-icon"><TbFoldersFilled size={38}/></span></a>
          <a href="#contact" className="dock-item"><span className="dock-icon color-highlight"><BsFillTelephoneFill size={38}/></span></a>
        </nav>
      </section>
    </header>
  );
};
