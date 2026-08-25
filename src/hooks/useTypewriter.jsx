import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 30, delay = 0, isLoading = false) => {
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
    if (!canStart || isLoading) return;

    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed, canStart, isLoading]);

  return displayedText;
};

export default useTypewriter;
