import React, { memo } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

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
          sx={{
            bgcolor: theme => (
              theme.palette.mode === 'light' ? '#f7f7f7' : '#2a2a2a'),
          }}
          showLabels
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