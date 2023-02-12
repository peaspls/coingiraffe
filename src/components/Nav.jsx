import React, { memo } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default memo(function Nav(props) {
  const { value, onChange, children } = props;

  return (
    <>
      <BottomNavigation />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            onChange(newValue);
          }}
        >
          {children}
        </BottomNavigation>
      </Paper>
    </>
  );
})