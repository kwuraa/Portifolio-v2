import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Terminal from './components/Terminal.jsx'
import Profile from './components/Profile.jsx'
import Projects from './components/Projects.jsx'
import './App.css'

function App() {

  return (
   <div className="bg-main">
    <Navbar/>
      <div className="container-layout">
        <section className='hero-section'>
          <Terminal/>
          <Profile/>
        </section>
        <section className="section-title-container">
          <h2 className="section-title">~/Projetos</h2>
          <span className="title-line"></span>
        </section>
        <Projects/>
      </div>
   </div>
  )
}

export default App
