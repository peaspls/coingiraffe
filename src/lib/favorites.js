import { useState } from 'react';

const getFromLocalStorage = () => {
  const favorites = window.localStorage.getItem('favorites');
  return favorites !== null ? JSON.parse(favorites) : {};
};

const saveToLocalStorage = (favorites) => {
  window.localStorage.setItem('favorites', JSON.stringify(favorites));
};

const useFavorites = () => {
  const [state, _setState] = useState(getFromLocalStorage());

  const setState = (favorites) => {
    _setState(favorites);
    saveToLocalStorage(favorites);
  };

  return [state, setState];
};

export { useFavorites };