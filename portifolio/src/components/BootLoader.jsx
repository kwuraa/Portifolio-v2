import react, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewreiterText.jsx";
import "../styles/BootLoader.css";

const BootLoader = ({ onComplete }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const timer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const bootText = isMobile
    ? "> INITIALIZING SYSTEM...\n> DEVICE DETECTED: MOBILE\n> [NOTICE]: Best experience on Desktop 🖥️\n> SYSTEM READY."
    : "> INITIALIZING SYSTEM...\n> DEVICE DETECTED: DESKTOP\n> LOADING PORTFOLIO OS...\n> SYSTEM READY.";
  return (
    <motion.div
      className="boot-loader"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="boot-terminal">
        <TypewriterText text={bootText} speed={20} onComplete={onComplete} />
      </div>
    </motion.div>
  );
};

export default BootLoader;
