import React from "react";

import EducationTerminalContent from "../components/TerminalContents/EducationTerminalContent.jsx";
import ExperienceTerminalContent from "../components/TerminalContents/ExperienceTerminalContent.jsx";

const MobileTerminal = ({ isLoading }) => {
  return (
    <div className="mobile-terminal-container">
      <div className="mobile-terminal-header">
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <div className="terminal-title">kawamura — bash — about</div>
      </div>

      <div className="mobile-terminal-body">
        <div className="mobile-section">
          <EducationTerminalContent isLoading={isLoading} />
        </div>

        <div className="mobile-divider" />

        <div className="mobile-section">
          <ExperienceTerminalContent isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default MobileTerminal;
