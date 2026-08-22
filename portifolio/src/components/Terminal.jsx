import React from "react";
import "../styles/Terminal.css";

const Terminal = ({ title = "Kawamura - bash", children, className = "" }) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <div className="terminal-title">{title}</div>
      </div>

      <div className="terminal-body">
        {children}
        <span className="terminal-cursor"></span>
      </div>
    </div>
  );
};

export default Terminal;
