import React, { useState, useEffect } from 'react';

const TextChange = () => {
  const texts = ["Hi, I'm Rab Nawaz", "I'm a Frontend Developer", "Let's build something great!"];
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = texts[index];

    const typingSpeed = isDeleting ? 30 : 80;
    const pauseTime = isDeleting ? 500 : 1000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentString.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentString.length) {
          setIsDeleting(true);
        }
      } else {
        setCurrentText(currentString.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length); // ✅ loop back to start
        }
      }
    }, charIndex === currentString.length ? pauseTime : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
