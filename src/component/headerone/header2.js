import React, { useState } from 'react';
import './navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Logo</a>
        <button onClick={toggleNavbar} className="navbar-toggler">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a href="/admissions" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Admissions
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/admissions/programs">Offered Programs</a></li>
              <li><a className="dropdown-item" href="/admissions/eligibility">Eligibility Criteria</a></li>
              <li><a className="dropdown-item" href="/admissions/apply">How to Apply</a></li>
              <li><a className="dropdown-item" href="/admissions/fees">Fee Structure</a></li>
              <li><a className="dropdown-item" href="/admissions/scholarships">Scholarships</a></li>
              <li><a className="dropdown-item" href="/admissions/prospectus">Prospectus</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/epcad" className="nav-link">EPCAD</a>
          </li>
          <li className="nav-item">
            <a href="/campuses" className="nav-link">Campuses</a>
          </li>
          <li className="nav-item">
            <a href="/careers" className="nav-link">Careers</a>
          </li>
          <li className="nav-item">
            <a href="/students" className="nav-link">Students</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
