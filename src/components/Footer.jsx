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
      <BottomNavigation />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          sx={{
            bgcolor: theme => (
              theme.palette.mode === 'light' ? '#f7f7f7' : '#2a2a2a'),
          }}
          showLabels
          value={location.pathname}
          onChange={(event, newValue) => {
            navigate(newValue);
          }}
        >
          <BottomNavigationAction label="Home" value="/" icon={<HomeRoundedIcon />} />
          <BottomNavigationAction label="Markets" value="/markets" icon={<BarChartRoundedIcon />} />
          <BottomNavigationAction label="Favorites" value="/favorites" icon={<FavoriteRoundedIcon />} />
          <BottomNavigationAction label="Search" value="/search" icon={<SearchRoundedIcon />} />
        </BottomNavigation>
      </Paper>
    </footer>
  );
};