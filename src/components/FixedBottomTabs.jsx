import React, { memo } from 'react';
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs';

export default memo(function FixedBottomTabs(props) {
  const { value, onChange, children } = props;

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Tabs
        value={value}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
      >
        {children}
      </Tabs>
    </Paper>
  );
})