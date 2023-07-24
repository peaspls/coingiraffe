import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDarkMode } from '../hooks/darkMode';
import DarkModeSwitch from './DarkModeSwitch';
import { Icon } from '@iconify/react';

export default function Header(props) {
  const { title } = props;
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className='grid grid-cols-[auto_1fr_auto] h-16 sticky top-0 px-4 items-center bg-stone-100 dark:bg-neutral-800 border-b border-slate-900/10 z-10'>
      <Link to='/' className='flex items-center min-w-max'>
        <img
          className='mr-2'
          src='/giraffe.svg'
          width='20px'
          height='40px'
          alt='Giraffe Logo'
        />
        <div className='font-medium text-lg text-lime-700 dark:text-stone-200 max-[320px]:text-xs'>
          {title}
        </div>
      </Link>

      <div className='flex justify-self-end'>
        <NavLink
          to='/'
          className='flex flex-row items-center justify-center ml-2 mr-2 border-b-2 border-lime-700 border-opacity-0 [&.active]:border-opacity-100 hover:border-opacity-100'>
          <Icon
            icon='tabler:home'
            className='text-neutral-600 dark:text-stone-200 p-[4px] w-[28px] h-[28px]'
          />
          <span className='text-sm hidden'>Home</span>
        </NavLink>
        <NavLink
          to='/favorites'
          className='flex flex-row items-center justify-center ml-2 mr-2 border-b-2 border-lime-700 border-opacity-0 [&.active]:border-opacity-100 hover:border-opacity-100'>
          <Icon
            icon='tabler:star-filled'
            className='text-neutral-600 dark:text-stone-200 p-[4px] w-[28px] h-[28px]'
          />
          <span className='text-sm hidden'>Favorites</span>
        </NavLink>
      </div>
      <div className='justify-self-end ml-4'>
        <DarkModeSwitch
          isOn={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
    </nav>
  );
}
