import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer text-white py-5">
      <div className="container">
        <div className="row align-items-center py-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <a href="/" className="footer-brand d-inline-flex align-items-center gap-2">
              <i className="bi bi-rocket-fill"></i>
              <span>MyPortfolio</span>
            </a>
            <p className="footer-tagline small text-white-50 mt-2">Creative developer — building modern experiences</p>
          </div>

          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <ul className="list-unstyled d-flex justify-content-center gap-3 mb-0 footer-nav">
              <li><a href="#home" className="footer-link"> <i className="bi bi-house-fill"></i> <span>Home</span></a></li>
              <li><a href="#about" className="footer-link"> <i className="bi bi-person-circle"></i> <span>About</span></a></li>
              <li><a href="#portfolio" className="footer-link"> <i className="bi bi-briefcase-fill"></i> <span>Portfolio</span></a></li>
              <li><a href="#contact" className="footer-link"> <i className="bi bi-envelope-fill"></i> <span>Contact</span></a></li>
            </ul>
          </div>

          <div className="col-md-4 text-md-end text-center">
            <div className="socials d-inline-flex align-items-center gap-2">
              <a href="#" className="social-link" aria-label="GitHub"><i className="bi bi-github"></i></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="social-link" aria-label="Twitter"><i className="bi bi-twitter"></i></a>
            </div>

            <button
              type="button"
              className="btn btn-sm btn-outline-light ms-3 back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              <i className="bi bi-arrow-up"></i>
            </button>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="row">
          <div className="col text-center small text-white-50  pb-3">
            © {new Date().getFullYear()} MyPortfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
