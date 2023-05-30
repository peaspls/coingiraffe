import React, { useState, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import DefaultLayout from './layout/DefaultLayout';
import MarketsPage from './pages/MarketsPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchPage from './pages/SearchPage';
import { DarkModeContext } from './context/DarkModeContext';
import { makeTheme } from './theme/theme';
import { registerSW } from 'virtual:pwa-register'

export default function App() {
  registerSW({ immediate: true })

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const theme = makeTheme({ darkMode });

  const toggleDarkMode = useMemo(
    () => ({
      toggle: () => {
        setDarkMode((prevMode) => !prevMode);
      },
    }),
    [],
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<MarketsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    )
  );

  return (
    <DarkModeContext.Provider value={toggleDarkMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};