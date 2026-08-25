import React from "react";
import TypewriterText from "../TypewreiterText.jsx";

const WelcomeTerminalContent = ({ isLoading }) => {
  return (
    <>
      <div className="terminal-line ">
        <span className="user-host">kawamura@portfolio:~$</span>
        <span className="command"> ./welcome.sh</span>
      </div>
      <div className="terminal-content">
        <p className="greeting">
          .. Olá, eu sou o <span className="highlight">Matheus</span>!
        </p>
        <div className="bio-container">
          <p className="bio">
            <TypewriterText
              isLoading={isLoading}
              delay={200}
              speed={20}
              text="Bem-vindo ao meu terminal criativo. Sou um Desenvolvedor Full Stack Freelancer ajudando startups a transformarem ideias em produtos web escaláveis."
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default WelcomeTerminalContent;
