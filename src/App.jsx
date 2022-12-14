import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MarketsPage from './pages/MarketsPage';
import FavoritesPage from './pages/FavoritesPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MarketsPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

export default function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};