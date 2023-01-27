import React from 'react';
import { Outlet } from "react-router-dom"
import Box from '@mui/material/Box';
import Header from '../components/Header';

export default function DefaultLayout() {
  return (
    <>
      <Header
        fiatOptions={['eur', 'usd']}
        selectedFiat={'usd'}
        onFiatChange={console.log}
      />
      <Box sx={{ pb: 7 }}>
        <Outlet />
      </Box>
    </>
  );
};