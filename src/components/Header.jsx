import React from 'react';
import { createUseStyles } from 'react-jss'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { DarkModeContext } from '../context/DarkModeContext';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import DarkModeSwitch from './DarkModeSwitch';

const useStyles = createUseStyles({
  logo: {
    marginRight: 10
  },
});

export default function Header() {
  const cls = useStyles();
  const theme = useTheme();
  const darkMode = React.useContext(DarkModeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <img className={cls.logo} src="/giraffe.svg" alt="Giraffe Logo" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Coingiraffe
        </Typography>
        <FormGroup>
          <FormControlLabel sx={{ marginRight: 0 }} control={
            <DarkModeSwitch
              sx={{ m: 1 }}
              checked={theme.palette.mode === 'dark'}
              onChange={darkMode.toggle}
            />}
          />
        </FormGroup>
      </Toolbar>
    </AppBar>
  );
}