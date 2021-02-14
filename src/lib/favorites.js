import { useState } from 'react';

const getFromLocalStorage = () => {
  const favorites = window.localStorage.getItem('favorites');
  return favorites !== null ? JSON.parse(favorites) : {};
};

const saveToLocalStorage = (favorites) => {
  window.localStorage.setItem('favorites', JSON.stringify(favorites));
};

const useFavorites = () => {
  const [favorites, setFavorites] = useState(getFromLocalStorage());

  const toggleFavorite = (id) => {
    const change = { ...favorites };
    change[id] === undefined ? change[id] = true : delete change[id];    
    setFavorites(change);
    saveToLocalStorage(favorites);
  };

  return [favorites, toggleFavorite];
};

export { useFavorites };