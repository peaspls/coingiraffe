import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from './layout/DefaultLayout';
import MarketsPage from './pages/MarketsPage';
import { DarkModeContext } from './context/DarkModeContext';
import { registerSW } from 'virtual:pwa-register'

export default function App() {
  registerSW({ immediate: true })

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = React.useState(prefersDarkMode);

  const darkMode = React.useMemo(
    () => ({
      toggle: () => {
        setIsDarkMode((prevMode) => !prevMode);
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode],
  );

  return (
    <DarkModeContext.Provider value={darkMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<MarketsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};