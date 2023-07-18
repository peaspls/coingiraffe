import React from 'react';
import { Link } from "react-router-dom";
import { useDarkMode } from '../hooks/darkMode';
import DarkModeSwitch from './DarkModeSwitch';
import { Icon } from '@iconify/react';

export default function Header(props) {
  const { title } = props;
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="grid grid-cols-[auto_1fr_auto] h-14 sticky top-0 px-4 items-center bg-gray-50 border-b border-slate-900/10 z-10">
      <Link to="/" className="flex items-center">
        <img className="mr-2" src="/giraffe.svg" width="20px" height="40px" alt="Giraffe Logo" />
        <div className="font-medium text-lg text-lime-700">{title}</div>
      </Link>
      <div className="flex justify-self-end ml-5">
        <Link to="/search">
          <Icon
            icon="tabler:search"
            className="text-slate-800 p-[4px] w-[30px] h-[30px] ml-3"
          />
        </Link>
        <Link to="/">
          <Icon
            icon="tabler:home"
            className="text-slate-800 p-[4px] w-[30px] h-[30px] ml-3"
          />
        </Link>
        <Link to="/favorites">
          <Icon
            icon="tabler:star-filled"
            className="text-slate-800 p-[4px] w-[30px] h-[30px] ml-3"
          />
        </Link>
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