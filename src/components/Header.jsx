import React from 'react';
import { createUseStyles } from 'react-jss'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { DarkModeContext } from '../context/DarkModeContext';

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
        <IconButton onClick={darkMode.toggle} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}