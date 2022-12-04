import React from 'react';
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';

const FixedBottomBar = ({ view, onViewChange }) => {
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ width: '100%' }}
        value={view}
        onChange={(event, newValue) => {
          onViewChange(newValue);
        }}
      >
        <BottomNavigationAction
          label="Market"
          value="all"
          icon={<ShowChartRoundedIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorite"
          icon={<FavoriteRoundedIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default FixedBottomBar;