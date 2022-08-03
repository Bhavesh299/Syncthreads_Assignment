import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <section className="navbar">
      <nav className="navbar__container">
        <Link to="/" className="links">
          <h1 className="site-logo">SYNCTHREAD'S</h1>
        </Link>

        <Link to="/Register" className="links">
          <h1 className="site-logo">SIGN UP</h1>
        </Link>

      </nav>
    </section>
    </div>
    
  )
}
