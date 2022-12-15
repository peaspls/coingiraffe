import React from 'react';
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';

export default function FixedBottomNavBar(props) {
  const { value, onChange } = props;

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ width: '100%' }}
        value={value}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
      >
        <BottomNavigationAction
          label="Markets"
          value="/"
          icon={<ShowChartRoundedIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          value="/favorites"
          icon={<FavoriteRoundedIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}