import { useState, useEffect } from "react";

const useTypewriter = (
  text = "",
  speed = 30,
  delay = 0,
  isLoading = false,
  onComplete,
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [canStart, setCanStart] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setDisplayedText("");
      setIndex(0);
      setCanStart(false);
      return;
    }

    const delayTimer = setTimeout(() => {
      setCanStart(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [isLoading, delay]);

  useEffect(() => {
    if (!canStart || isLoading || !text) return;

    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else if (index === text.length && typeof onComplete === "function") {
      onComplete();
    }
  }, [index, text, speed, canStart, isLoading, onComplete]);

  return displayedText;
};

export default useTypewriter;
