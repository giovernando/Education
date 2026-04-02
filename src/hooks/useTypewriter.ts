import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  pauseSpeed?: number;
  loop?: boolean;
}

export const useTypewriter = ({
  texts,
  typingSpeed = 80,
  deleteSpeed = 40,
  pauseSpeed = 2000,
  loop = true,
}: UseTypewriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const handleType = useCallback(() => {
    const text = texts[currentTextIndex];
    if (!isDeleting) {
      // Typing
      if (currentText.length < text.length) {
        setCurrentText(text.substring(0, currentText.length + 1));
      } else {
        // Pause before delete
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseSpeed);
        return;
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        setCurrentText(text.substring(0, currentText.length - 1));
      } else {
        // Switch to next text
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        return;
      }
    }
  }, [currentText, currentTextIndex, isDeleting, texts, pauseSpeed]);

  useEffect(() => {
    const timer = setTimeout(handleType, isDeleting ? deleteSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [handleType, isDeleting, typingSpeed, deleteSpeed]);

  // Blinking cursor
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return {
    text: currentText,
    cursor: showCursor ? '|' : '',
  };
};

