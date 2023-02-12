import React, { useLayoutEffect } from 'react';
import { Outlet } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Nav from '../components/Nav';
import Header from '../components/Header';

export default function DefaultLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Header />
      <Outlet />
      <Nav value={location.pathname} onChange={(pathname) => navigate(pathname)}>
        <BottomNavigationAction label="Markets" value="/" icon={<ShowChartRoundedIcon />} />
        <BottomNavigationAction label="Favorites" value="/favorites" icon={<FavoriteRoundedIcon />} />
      </Nav>
    </>
  );
};