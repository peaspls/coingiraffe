import { useState } from 'react';

let currentMode = false;

const applyDarkMode = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(currentMode);

  const set = (darkMode) => {
    currentMode = darkMode;
    setDarkMode(currentMode);
    applyDarkMode(currentMode);
  };

  return [darkMode, set];
};

export { useDarkMode };
