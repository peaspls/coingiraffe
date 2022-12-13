import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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