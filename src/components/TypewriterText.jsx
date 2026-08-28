import React from "react";
import useTypewriter from "../hooks/useTypewriter";

const TypewriterText = ({
  text,
  speed = 30,
  delay = 0,
  isLoading = false,
  className = "",
  onComplete,
}) => {
  const animatedText = useTypewriter(text, speed, delay, isLoading, onComplete);

  return <span className={className}>{animatedText}</span>;
};

export default TypewriterText;
