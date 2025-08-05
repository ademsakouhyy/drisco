import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleHamburger = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className={`vertical-navbar${open ? ' open' : ''}`}>
      <div className="navbar-logo">
        <h2>DRISCO</h2>
        <button className="hamburger" onClick={handleHamburger} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>
      <ul className={`nav-links${open ? ' show' : ''}`}>
        <li><Link to="/" className="active" onClick={closeMenu}>HOME</Link></li>
        <li><Link to="/about" onClick={closeMenu}>ABOUT US</Link></li>
        <li><Link to="/vision" onClick={closeMenu}>OUR VISION</Link></li>
        <li><Link to="/values" onClick={closeMenu}>OUR VALUES</Link></li>
        <li><Link to="/core" onClick={closeMenu}>COMPANY CORE BUSINESS</Link></li>
        <li><Link to="/experience" onClick={closeMenu}>EXPERIENCE</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>REFERENCES & CONTACT</Link></li>
        <li><Link to="/commitment" onClick={closeMenu}>OUR COMMITMENT</Link></li>
      </ul>
      <div className="navbar-footer">
        <p>© 2025 Drisco</p>
      </div>
    </nav>
  );
};

export default Navbar;