import React from "react";
import { FiFileText } from "react-icons/fi";
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

        <div className="footer-copy">
          <p>© {currentYear} Matheus Kawamura. All rights reserved.</p>
        </div>
        <a
          href="/curriculo.pdf"
          download="Matheus_Kawamura_CV.pdf"
          className="footer-cv-btn"
          title="Download Currículo"
        >
          <FiFileText size={16} />
          <span>curriculum.pdf</span>
        </a>
      </div>
    </footer>
  );
}
