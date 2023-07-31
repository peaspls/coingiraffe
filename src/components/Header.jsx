import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDarkMode } from "../hooks/darkMode";
import DarkModeSwitch from "./DarkModeSwitch";
import { Icon } from "@iconify/react";

export default function Header(props) {
  const { title } = props;
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="sticky top-0 z-10 grid h-16 grid-cols-[auto_1fr_auto] items-center bg-white px-4 dark:bg-neutral-900">
      <Link to="/" className="flex min-w-max items-center">
        <img
          className="mr-2"
          src="/giraffe.svg"
          width="20px"
          height="40px"
          alt="Giraffe Logo"
        />
        <div className="text-lg font-medium text-neutral-700 dark:text-neutral-200 max-[320px]:text-xs">
          {title}
        </div>
      </Link>

      <div className="flex justify-self-end">
        <NavLink
          to="/"
          className="ml-2 mr-2 flex flex-row items-center justify-center border-b-2 border-lime-600 border-opacity-0 hover:border-opacity-100 [&.active]:border-opacity-100"
        >
          <Icon
            icon="tabler:home"
            className="h-[28px] w-[28px] p-[4px] text-neutral-700 dark:text-neutral-200"
          />
          <span className="hidden text-sm">Home</span>
        </NavLink>
        <NavLink
          to="/favorites"
          className="ml-2 mr-2 flex flex-row items-center justify-center border-b-2 border-lime-600 border-opacity-0 hover:border-opacity-100 [&.active]:border-opacity-100"
        >
          <Icon
            icon="tabler:star-filled"
            className="h-[28px] w-[28px] p-[4px] text-neutral-700 dark:text-neutral-200"
          />
          <span className="hidden text-sm">Favorites</span>
        </NavLink>
      </div>
      <div className="ml-4 justify-self-end">
        <DarkModeSwitch
          isOn={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
    </nav>
  );
}
