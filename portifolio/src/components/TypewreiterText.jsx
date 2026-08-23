import React from "react";
import useTypewriter from "../hooks/useTypewriter";

const TypewriterText = ({ text, speed = 30, className = "" }) => {
  const animatedText = useTypewriter(text, speed);
  return <span className={className}>{animatedText}</span>;
};

export default TypewriterText;
