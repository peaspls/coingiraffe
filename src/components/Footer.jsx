import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from '@iconify/react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer>
      <BottomNavigation
        sx={{
          bgcolor: theme => (theme.palette.background.default),
        }}
      />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            bgcolor: theme => (theme.palette.background.secondary),
            borderTop: theme => (`1px solid ${theme.palette.containerContrast}`),
          }}
          showLabels
          value={location.pathname}
          onChange={(event, newValue) => {
            navigate(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            value="/"
            icon={<Icon icon="tabler:home" width="20" height="20" />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="/favorites"
            icon={<Icon icon="tabler:star-filled" width="20" height="20" />}
          />
          <BottomNavigationAction
            label="Search"
            value="/search"
            icon={<Icon icon="tabler:search" width="20" height="20" />}
          />
        </BottomNavigation>
      </Paper>
    </footer>
  );
};