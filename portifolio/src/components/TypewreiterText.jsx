import React from "react";
import useTypewriter from "../hooks/useTypewriter";

const TypewriterText = ({ text, speed = 30 }) => {
  const animatedText = useTypewriter(text, speed);
  return <span>{animatedText}</span>;
};

export default TypewriterText;
