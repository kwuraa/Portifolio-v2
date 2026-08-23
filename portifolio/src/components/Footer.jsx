import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-status">
          <span className="status-indicator"></span>
          <span className="status-text">
            System Status: All systems operational
          </span>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/kwuraa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/matheus-morais-kawamura-765435248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:kwuraa@gmail.com">Contato ✉️</a>
        </div>

        <div className="footer-copy">
          <p>© {currentYear} kawamura. Built with React & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
