import React from "react";
import Profile from "./Profile.jsx";
import WelcomeTerminalContent from "../components/TerminalContents/WelcomeTerminalContent.jsx";
import AboutTerminalContent from "../components/TerminalContents/AboutTerminalContent.jsx";
import ServicesTerminalContent from "../components/TerminalContents/ServicesTerminalContent.jsx";
import "../styles/MobileTerminal.css";

const MobileTerminal = ({ isLoading }) => {
  return (
    <div className="mobile-terminal-container">
      <div className="mobile-terminal-header">
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <div className="terminal-title">kawamura — bash — mobile</div>
      </div>

      <div className="mobile-terminal-body">
        <div className="mobile-profile-section">
          <Profile />
        </div>

        <div className="mobile-section">
          <WelcomeTerminalContent isLoading={isLoading} />
        </div>

        <div className="mobile-divider" />

        <div className="mobile-section">
          <AboutTerminalContent isLoading={isLoading} />
        </div>

        <div className="mobile-divider" />

        <div className="mobile-section">
          <ServicesTerminalContent isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default MobileTerminal;
