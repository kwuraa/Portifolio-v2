import React, { useState, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import "../styles/Terminal.css";

const Terminal = ({
  title = "kawamura — bash",
  children,
  className = "",
  hint,
  isDraggable = true,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const dragControls = useDragControls();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldDrag = isDraggable && !isMobile;

  const mobileStyles = {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    transform: "none",
  };

  return (
    <motion.div
      className={`terminal-window ${className}`}
      style={isMobile || !isDraggable ? mobileStyles : {}}
      drag={shouldDrag}
      dragControls={dragControls}
      dragListener={false}
      dragSnapToOrigin
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      initial={!isDraggable ? { opacity: 0, y: 30 } : false}
      whileInView={!isDraggable ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 1.2, ease: "easeInOut" }}
      whileTap={
        shouldDrag
          ? { scale: 1.05, cursor: "grabbing", transition: { duration: 0.05 } }
          : {}
      }
    >
      <div
        className="terminal-header"
        onPointerDown={(e) => shouldDrag && dragControls.start(e)}
        style={{ cursor: shouldDrag ? "grab" : "default" }}
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
