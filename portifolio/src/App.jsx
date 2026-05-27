import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Terminal from './components/Terminal.jsx'
import Profile from './components/Profile.jsx'
import './App.css'

function App() {

  return (
   <div className="bg-main">
    <Navbar/>
      <div className="container-layout">
    <Terminal/>
    <Profile/>
    </div>
   </div>
  )
}

export default App
