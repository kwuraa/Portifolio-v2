import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const AboutTerminalContent = () => {
  return (
    <>
      <div className="terminal-line">
        <span className="user-host">kawamura@portfolio:~$</span>
        <span className="command"> cat stack.json</span>
      </div>
      <div className="terminal-content">
        <p className="greeting mb-10">.. Minha Stack de Tecnologias:</p>

        <div
          className="tech-stack-container"
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "15px",
          }}
        >
          <div className="tech-item" title="HTML5">
            <FaHtml5 size={40} color="#E34F26" />
          </div>
          <div className="tech-item" title="CSS3">
            <FaCss3Alt size={40} color="#1572B6" />
          </div>
          <div className="tech-item" title="JavaScript">
            <FaJs size={40} color="#F7DF1E" />
          </div>
          <div className="tech-item" title="React">
            <FaReact size={40} color="#61DAFB" />
          </div>
          <div className="tech-item" title="Node.js">
            <FaNodeJs size={40} color="#339933" />
          </div>
          <div className="tech-item" title="SQL">
            <FaDatabase size={40} color="#4479A1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTerminalContent;
