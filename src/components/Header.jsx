import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDarkMode } from '../hooks/darkMode';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header(props) {
  const { title } = props;
  const [darkMode, setDarkMode] = useDarkMode();
  const theme = useTheme();

  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] h-14 sticky top-0 px-4 items-center bg-white/100 border-b border-slate-900/10 z-10">
      <Link to="/" className="flex items-center">
        <img className="mr-2" src="/giraffe.svg" alt="Giraffe Logo" />
        <div className="font-medium text-lg text-lime-600">{title}</div>
      </Link>
      <div>
        Search
      </div>
      <div className="justify-self-end">
        <FormGroup>
          <FormControlLabel sx={{ marginRight: 0 }} control={
            <DarkModeSwitch
              sx={{ m: 1 }}
              checked={theme.palette.mode === 'dark'}
              onChange={() => setDarkMode(!darkMode)}
            />}
          />
        </FormGroup>
      </div>
    </nav>
  );
};