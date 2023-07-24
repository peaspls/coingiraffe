import React, { useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { prefersDarkMode } from './lib/mediaMatch';
import { useDarkMode } from './hooks/darkMode';
import DefaultLayout from './layout/DefaultLayout';
import MarketsPage from './pages/MarketsPage';
import FavoritesPage from './pages/FavoritesPage';
import SearchPage from './pages/SearchPage';
import { registerSW } from 'virtual:pwa-register';

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  registerSW({ immediate: true });

  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<DefaultLayout />}>
        <Route path='/' element={<MarketsPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
