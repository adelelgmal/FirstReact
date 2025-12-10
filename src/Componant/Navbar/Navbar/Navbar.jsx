import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <a href="/">
            <i className="bi bi-rocket-fill"></i>
            <span>Start Framework
</span>
          </a>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? "active" : ""}`}>
            <i className="bi bi-list"></i>
          </span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-house-fill"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="about" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-person-circle"></i>
              <span>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="portfolio" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-briefcase-fill"></i>
              <span>Portfolio</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="contact" className="nav-link" onClick={closeMenu}>
              <i className="bi bi-envelope-fill"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>

        
        
      </div>
    </nav>
  );
}
