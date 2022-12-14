import React from 'react';
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation';

export default function FixedBottomNavBar(props) {
  const { children, value, onChange } = props;

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
        {children}
      </BottomNavigation>
    </Paper>
  );
}