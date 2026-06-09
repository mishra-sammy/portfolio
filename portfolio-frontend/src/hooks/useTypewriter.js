import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }
  }, [text, wordIndex, isDeleting, words]);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(tick, 300);
      return () => clearTimeout(timeout);
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timeout = setTimeout(tick, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, tick, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
