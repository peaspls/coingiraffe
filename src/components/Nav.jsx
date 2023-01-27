import React, { memo } from 'react';
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs';

export default memo(function Nav(props) {
  const { value, onChange, children } = props;

  return (
    <Paper elevation={3}>
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