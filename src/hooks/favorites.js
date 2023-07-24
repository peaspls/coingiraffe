import { useLocalStorage } from './localStorage';

const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage({
    key: 'favorites',
    defaultValue: {},
  });

  const toggleFavorite = (id) => {
    const change = { ...favorites };
    change[id] === undefined ? (change[id] = true) : delete change[id];
    setFavorites(change);
  };

  return [favorites, toggleFavorite];
};

export { useFavorites };
