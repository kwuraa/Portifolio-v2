import React, { useState } from "react";
import TypewriterText from "../TypewriterText.jsx";
import { experienceData } from "../../data/aboutData";
import { FiBriefcase } from "react-icons/fi";

const ExperienceTerminalContent = ({ isLoading }) => {
  const [commandDone, setCommandDone] = useState(false);
  const [visibleItemsCount, setVisibleItemsCount] = useState(0);

  const handleItemComplete = () => {
    setVisibleItemsCount((prev) => prev + 1);
  };

  return (
    <>
      <div className="terminal-line">
        <span className="user-host">kawamura@portfolio:~$</span>
        <span className="command">
          <TypewriterText
            text=" git log --experience"
            delay={50}
            isLoading={isLoading}
            onComplete={() => setCommandDone(true)}
          />
        </span>
      </div>

      {commandDone && (
        <div className="terminal-content">
          <div className="info-list">
            {experienceData.map((item, index) => {
              if (index > visibleItemsCount) return null;

              return (
                <div key={item.id} className="info-block">
                  <div className="info-header">
                    <FiBriefcase className="icon-info" />
                    <h4>
                      <TypewriterText
                        text={item.role}
                        speed={20}
                        onComplete={
                          index === visibleItemsCount
                            ? handleItemComplete
                            : undefined
                        }
                      />
                    </h4>
                  </div>
                  {index < visibleItemsCount && (
                    <>
                      <p className="info-sub">
                        {item.company} • {item.period}
                      </p>
                      <p className="info-desc">{item.description}</p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ExperienceTerminalContent;
