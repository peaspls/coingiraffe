import React from 'react';
import { Link } from "react-router-dom";
import { useDarkMode } from '../hooks/darkMode';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header(props) {
  const { title } = props;
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="grid grid-cols-[auto_1fr_auto] h-14 sticky top-0 px-4 items-center bg-gray-50 border-b border-slate-900/10 z-10">
      <Link to="/" className="flex items-center">
        <img className="mr-2" src="/giraffe.svg" alt="Giraffe Logo" />
        <div className="font-medium text-lg text-lime-700">{title}</div>
      </Link>
      <div className="justify-self-end ml-4">
        Search
      </div>
      <div className="justify-self-end ml-4">
        <DarkModeSwitch
          isOn={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
    </nav>
  );
};