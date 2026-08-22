import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Terminal from "./components/Terminal.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import TypewriterText from "./components/TypewreiterText.jsx";
import "./App.css";

function App() {
  return (
    <div id="home" className="bg-main">
      <Navbar />
      <div className="container-layout">
        <section className="hero-section">
          <div className="windows-container">
            <Terminal
              className="terminalAbout"
              title="kawamura — bash — 626 x 71"
            >
              <div className="terminal-line ">
                <span className="user-host">kawamura@portfolio:~$</span>
                <span className="command"> cat about_me.txt</span>
              </div>
              <div className="terminal-content">
                <p className="greeting">
                  .. Olá, eu sou o <span className="highlight">Matheus</span>!
                </p>
                <p className="bio">
                  <TypewriterText text="Desenvolvedor Full Stack Freelancer ajudando startups a transformarem ideias em produtos web escaláveis ..." />
                </p>
              </div>
              <div className="terminal-line mt-20">
                <span className="user-host">kawamura@portfolio:~$</span>
                <span className="command"> ls skills/</span>
              </div>
              <div className="skills-list">
                <p>
                  <span className="skill-category">frontend:</span> HTML5 | CSS3
                  | JavaScript | React
                </p>
                <p>
                  <span className="skill-category">backend:</span> Node.js | SQL
                  | APIs REST
                </p>
              </div>
            </Terminal>
            <Terminal
              className="terminalServices"
              title="kawamura — bash — services"
            >
              <div className="terminal-line">
                <span className="user-host">kawamura@portfolio:~$</span>
                <span className="command"> cat services.txt</span>
              </div>
              <div className="terminal-content">
                <p className="greeting">
                  .. O que posso fazer pelo seu negócio:
                </p>
                <div className="services-list mt-10">
                  <p>
                    <span className="highlight">[01]</span> Landing Pages &
                    Sites
                  </p>
                  <p className="bio">
                    <TypewriterText text="Páginas modernas e otimizadas para converter visitantes em clientes." />
                  </p>

                  <p className="mt-10">
                    <span className="highlight">[02]</span> Aplicações Web
                  </p>
                  <p className="bio">
                    <TypewriterText text="Sistemas web sob medida, funcionais e fáceis de manter." />
                  </p>

                  <p className="mt-10">
                    <span className="highlight">[03]</span> Manutenção &
                    Correções
                  </p>
                  <p className="bio">
                    "
                    <TypewriterText text="Ajustes de layout, melhorias de velocidade e correção de bugs." />
                    "
                  </p>
                </div>
              </div>
            </Terminal>
          </div>
          <Profile />
        </section>
        <section className="section-title-container">
          <h2 className="section-title">~/Projetos</h2>
          <span className="title-line"></span>
        </section>
        <Projects />
      </div>
    </div>
  );
}

export default App;
