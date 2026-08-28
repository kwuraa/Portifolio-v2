import React, { useState } from "react";
import TypewriterText from "../TypewriterText.jsx";
import { educationData } from "../../data/aboutData";
import { FiBookOpen } from "react-icons/fi";

const EducationTerminalContent = ({ isLoading }) => {
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
            text=" cat education.json"
            delay={50}
            isLoading={isLoading}
            onComplete={() => setCommandDone(true)}
          />
        </span>
      </div>

      {commandDone && (
        <div className="terminal-content">
          <div className="info-list">
            {educationData.map((item, index) => {
              if (index > visibleItemsCount) return null;

              return (
                <div key={item.id} className="info-block">
                  <div className="info-header">
                    <FiBookOpen className="icon-info" />
                    <h4>
                      <TypewriterText
                        text={item.title}
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
                    <p className="info-sub">
                      {item.institution} • {item.period}
                    </p>
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

export default EducationTerminalContent;
