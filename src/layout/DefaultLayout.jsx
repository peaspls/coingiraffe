import React from 'react';
import { Outlet } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
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
        <BottomNavigationAction label="Home" value="/" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="Markets" value="/markets" icon={<BarChartRoundedIcon />} />
        <BottomNavigationAction label="Favorites" value="/favorites" icon={<FavoriteRoundedIcon />} />
        <BottomNavigationAction label="Search" value="/search" icon={<SearchRoundedIcon />} />
      </Nav>
    </>
  );
};