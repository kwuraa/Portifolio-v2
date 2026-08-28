import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar.jsx";
import Terminal from "./components/Terminal.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import TypewriterText from "./components/TypewriterText.jsx";
import BootLoader from "./components/BootLoader.jsx";
import Footer from "./components/Footer.jsx";
import MobileTerminal from "./components/MobileTerminal.jsx";
import MobileAbout from "./components/MobileAbout.jsx";

import WelcomeTerminalContent from "./components/TerminalContents/WelcomeTerminalContent.jsx";
import ServicesTerminalContent from "./components/TerminalContents/ServicesTerminalContent.jsx";
import AboutTerminalContent from "./components/TerminalContents/AboutTerminalContent.jsx";
import EducationTerminalContent from "./components/TerminalContents/EducationTerminalContent.jsx";
import ExperienceTerminalContent from "./components/TerminalContents/ExperienceTerminalContent.jsx";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <BootLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div id="home" className="bg-main">
        <Navbar />
        <SpeedInsights />
        <Analytics />
        <div className="container-layout">
          <section className="hero-section">
            {isMobile ? (
              <MobileTerminal isLoading={isLoading} />
            ) : (
              <>
                <div className="windows-container">
                  <Terminal
                    className="terminalWelcome"
                    title="kawamura — bash — 626 x 71"
                    hint={
                      <TypewriterText
                        isLoading={isLoading}
                        delay={400}
                        speed={20}
                        className="terminal-drag-hint"
                        text={
                          "Clique e Segure no topo para Arrastar as janelas"
                        }
                      />
                    }
                  >
                    <WelcomeTerminalContent isLoading={isLoading} />
                  </Terminal>

                  <Terminal
                    className="terminalStack"
                    title="kawamura — bash — stack"
                  >
                    <AboutTerminalContent isLoading={isLoading} />
                  </Terminal>

                  <Terminal
                    className="terminalServices"
                    title="kawamura — bash — services"
                  >
                    <ServicesTerminalContent isLoading={isLoading} />
                  </Terminal>
                </div>
                <Profile />
              </>
            )}
          </section>
          <section className="container-about">
            {isMobile ? (
              <MobileAbout isLoading={isLoading} />
            ) : (
              <>
                <Terminal
                  className="terminalEducation"
                  title="kawamura - bash - education"
                  isDraggable={false}
                >
                  <EducationTerminalContent isLoading={isLoading} />
                </Terminal>

                <Terminal
                  className="terminalExperience"
                  title="kawamura - bash - experience"
                  isDraggable={false}
                >
                  <ExperienceTerminalContent isLoading={isLoading} />
                </Terminal>
              </>
            )}
          </section>

          <section className="section-title-container">
            <h2 className="section-title">~/Projetos</h2>
            <span className="title-line"></span>
          </section>
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
