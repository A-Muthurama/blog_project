import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 🟢 Header Component
export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">ElSayed</div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/articles" className="nav-link">Articles</Link>
            <Link to="/publications" className="nav-link">Publications</Link>
            <Link to="/training" className="nav-link">Training</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div>
          <h4>Dr. Elsayed M. Elazazi</h4>
          <p>Plant Genetic Resources &   
             Ecological Research Expert</p>
        </div>
          </div>
          
          <div className="footer-section">
            <div>
          <h4>Contact</h4>
          <p> ✉ emazazi@mm.gov.qa</p>
          <p>&emsp; Elazazi_genebank@yahoo.com</p>
          <p> ✆ +974 7725 4341</p>
        </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">ResearchGate</a></li>
            <li><a href="#">Google Scholar</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Dr. Elsayed M. Elazazi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};