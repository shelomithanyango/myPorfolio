import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">S<span>A.</span></Link>
      </div>
      
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
        </li>
      </ul>

      <div className="nav-cta">
        <Link to="/contact" className="hire-me">Hire Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;