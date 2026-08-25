import React, { useState, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import "../styles/Terminal.css";

const Terminal = ({
  title = "kawamura — bash",
  children,
  className = "",
  hint,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const dragControls = useDragControls();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className={`terminal-window ${className}`}
      style={
        isMobile
          ? {
              position: "relative",
              top: "auto",
              left: "auto",
              right: "auto",
              transform: "none",
            }
          : {}
      }
      drag={!isMobile}
      dragControls={dragControls}
      dragListener={false}
      dragSnapToOrigin={true}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      animate={!isMobile ? { scale: [1, 1.03, 1] } : { scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
      whileTap={
        !isMobile
          ? { scale: 1.05, cursor: "grabbing", transition: { duration: 0.05 } }
          : {}
      }
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
