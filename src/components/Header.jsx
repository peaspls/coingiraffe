import React from 'react';
import { createUseStyles } from 'react-jss'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const useStyles = createUseStyles({
  logo: {
    marginRight: 10
  },
});

const Header = () => {
  const cls = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <img className={cls.logo} src="/giraffe.svg" alt="Giraffe Logo" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Coingiraffe
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;