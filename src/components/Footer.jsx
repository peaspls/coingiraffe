import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
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
          <BottomNavigationAction label="Home" value="/" icon={<HomeRoundedIcon />} />
          <BottomNavigationAction label="Favorites" value="/favorites" icon={<FavoriteRoundedIcon />} />
          <BottomNavigationAction label="Search" value="/search" icon={<SearchRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    </footer>
  );
};