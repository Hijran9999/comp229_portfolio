// File: Navbar.jsx
// Student: Hijran Hajiyeva
// StudentID: 301493532
// Date: 1992-02-12

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Logo component with image instead of SVG
function Logo(){
  return (
    <Link to="/" className="logo" aria-label="Home">
      <img 
        src="/logo.png" 
        alt="Hijran Hajiyeva Logo"
        className="logo-img"
        width={50}
        height={50}
        style={{
          borderRadius: '50%',
          objectFit: 'cover',
          border: '1px solid #eee', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }}
      />
      <span className="logo-text">Hijran Hajiyeva</span>
    </Link>
  )
}

export default function Navbar(){
  return (
    <header className="site-header">
      <div className="nav-inner">
        <Logo />
        <nav className="main-nav">
          <NavLink to="/" end className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Projects</NavLink>
          <NavLink to="/services" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Services</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
