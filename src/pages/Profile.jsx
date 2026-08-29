import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Profile.css";
import foto from "../assets/profile.jfif";
import { FaLinkedin } from "react-icons/fa";
import { FiGithub, FiFileText } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const Profile = () => {
  const [copied, setCopied] = useState(false);
  const myEmail = "matheus.kawamura@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar e-mail:", err);
    }
  };

  return (
    <div className="profile-window" id="contact">
      <section className="terminal-profile-header">
        <div className="terminal-btn-profile">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <a
          href="/Matheus_Kawamura_CV.pdf"
          download="Matheus_Kawamura_CV.pdf"
          className="cv-top-link"
          title="Baixar CV"
        >
          <FiFileText size={16} />
          <span>CV</span>
        </a>
      </section>

      <section className="profile-content">
        <img src={foto} alt="Matheus Kawamura" className="profile-photo" />
        <span className="userName">
          Matheus <span className="highlight">Kawamura</span>
        </span>

        <div className="profile-social">
          <a
            href="https://github.com/kwuraa"
            target="_blank"
            rel="noreferrer"
            className="btn-social"
            title="GitHub"
          >
            <FiGithub className="social-icons" size={38} />
          </a>

          <a
            href="https://www.linkedin.com/in/matheus-morais-kawamura-765435248/"
            target="_blank"
            rel="noreferrer"
            className="btn-social"
            title="LinkedIn"
          >
            <FaLinkedin className="social-icons" size={38} />
          </a>

          <div className="gmail-wrapper">
            <AnimatePresence>
              {copied && (
                <motion.div
                  className="terminal-popup"
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.9 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <span className="popup-status">[SUCCESS]</span> copied!
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={handleCopy}
              className={`btn-social gmail-btn ${copied ? "active" : ""}`}
              title="Copiar e-mail"
              type="button"
            >
              <SiGmail className="social-icons" size={38} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
