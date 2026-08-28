import React from "react";
import TypewriterText from "../TypewriterText.jsx";

const ServicesTerminalContent = ({ isLoading }) => {
  return (
    <>
      <div className="terminal-line">
        <span className="user-host">kawamura@portfolio:~$</span>
        <span className="command"> cat services.txt</span>
      </div>

      <div className="terminal-content">
        <p className="greeting">.. O que posso fazer pelo seu negócio:</p>

        <div className="services-list mt-10">
          <p>
            <span className="highlight">[01]</span> Landing Pages & Sites
          </p>
          <p className="bio">
            <TypewriterText
              isLoading={isLoading}
              delay={200}
              speed={25}
              text="Páginas modernas e otimizadas para converter visitantes em clientes."
            />
          </p>

          <p className="mt-10">
            <span className="highlight">[02]</span> Aplicações Web
          </p>
          <p className="bio">
            <TypewriterText
              isLoading={isLoading}
              delay={200}
              speed={35}
              text="Sistemas web sob medida, funcionais e fáceis de manter."
            />
          </p>

          <p className="mt-10">
            <span className="highlight">[03]</span> Manutenção & Correções
          </p>
          <p className="bio">
            "
            <TypewriterText
              isLoading={isLoading}
              delay={200}
              speed={45}
              text="Ajustes de layout, melhorias de velocidade e correção de bugs."
            />
            "
          </p>
        </div>
      </div>
    </>
  );
};

export default ServicesTerminalContent;
