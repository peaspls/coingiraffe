import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Paper from '@mui/material/Paper'
import Tabs from '@mui/material/Tabs';

const useStyles = createUseStyles({
  space: {
    marginTop: 72,
  },
  fixed: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});

export default memo(function Nav(props) {
  const cls = useStyles();
  const { value, onChange, children } = props;

  return (
    <>
      <div className={cls.space}></div>
      <Paper className={cls.fixed}>
        <Tabs
          value={value}
          variant="fullWidth"
          textColor="primary"
          onChange={(event, newValue) => {
            onChange(newValue);
          }}
        >
          {children}
        </Tabs>
      </Paper>
    </>
  );
})