import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState, useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import DefaultLayout from './layout/DefaultLayout';
import MarketsPage from './pages/MarketsPage';
import FavoritesPage from './pages/FavoritesPage';
import { DarkModeContext } from './context/DarkModeContext';
import { registerSW } from 'virtual:pwa-register'

export default function App() {
  registerSW({ immediate: true })

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  const darkMode = useMemo(
    () => ({
      toggle: () => {
        setIsDarkMode((prevMode) => !prevMode);
      },
    }),
    [],
  );

  // Colors: https://m2.material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=bc804e&secondary.color=e0d5c1&secondary.text.color=3a3a3a&primary.text.color=f2f2f2
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          primary: {
            light: '#f1b07b',
            main: '#bc804e',
            dark: '#895324',
            contrastText: '#f2f2f2',
          },
          secondary: {
            light: '#fffff4',
            main: '#e0d5c1',
            dark: '#aea491',
            contrastText: '#3a3a3a',
          },
        },
      }),
    [isDarkMode],
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<MarketsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    )
  );

  return (
    <DarkModeContext.Provider value={darkMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};