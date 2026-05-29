import React from 'react';
import "../styles/Terminal.css"


const Terminal = () => {
  return (
    <container className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <div className="terminal-title">Kawamura — bash — 626 x 71</div>
      </div>

      
      <div className="terminal-body">
        <div className="terminal-line">
          <span className="user-host">kawamura@portfolio:~$</span>
          <span className="command"> cat about_me.txt</span>
        </div>

        <div className="terminal-content">
          <p className="greeting">.. Olá, eu sou o <span className="highlight">Matheus</span>!</p>
          <p className="bio">
            "Sou um estudante de Desenvolvimento Web apaixonado por transformar
            linhas de código em experiências digitais funcionais e intuitivas.
            Atualmente, foco meus estudos no ecossistema Fullstack..."
          </p>
        </div>

        <div className="terminal-line mt-20">
          <span className="user-host">kawamura@portfolio:~$</span>
          <span className="command"> ls skills/</span>
        </div>

        <div className="skills-list">
          <p><span className="skill-category">frontend:</span> HTML5 | CSS3 | JavaScript | React</p>
          <p><span className="skill-category">backend:</span> Node.js | SQL | APIs REST</p>
        </div>

        <span className="terminal-cursor"></span>
      </div>
    </container>
  );
};

export default Terminal;