import React, { useState, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import "../styles/Terminal.css";
import TypewriterText from "./TypewreiterText";

const Terminal = ({
  title = "kawamura — bash",
  children,
  className = "",
  hint,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const dragControls = useDragControls();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className={`terminal-window ${className}`}
      drag={!isMobile}
      dragControls={dragControls}
      dragListener={false}
      dragSnapToOrigin={true}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      animate={{ scale: [1, 1.03, 1] }}
      transition={{
        duration: 0.5,
        delay: 1.2,
        ease: "easeInOut",
      }}
      whileTap={{
        scale: 1.05,
        cursor: "grabbing",
        transition: { duration: 0.05 },
      }}
    >
      <div
        className="terminal-header"
        onPointerDown={(e) => !isMobile && dragControls.start(e)}
      >
        <div className="terminal-buttons">
          <span className="btn-close"></span>
          <span className="btn-minimize"></span>
          <span className="btn-maximize"></span>
        </div>
        <div className="terminal-title">{title}</div>
      </div>

      <div className="terminal-body">
        {children}
        {hint}
        <span className="terminal-cursor"></span>
      </div>
    </motion.div>
  );
};

export default Terminal;
