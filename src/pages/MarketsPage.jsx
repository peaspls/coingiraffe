import React from 'react';
import { useFavorites } from '../hooks/favorites';
import { useLocalStorage } from '../hooks/localStorage';
import { useMarkets } from '../hooks/markets';
import DefaultLayout from '../layout/DefaultLayout';
import MarketsList from '../components/MarketsList';

export default function MarketsPage() {
  const [fiat, setFiat] = useLocalStorage({ key: 'fiat', defaultValue: 'usd' });
  const [markets, updateMarkets] = useMarkets({ fiat });
  const [favorites, toggleFavorite] = useFavorites();

  function handleFiatChange(fiat) {
    setFiat(fiat);
    updateMarkets({ fiat });
  }

  return (
    <DefaultLayout
      navigation='/'
      fiat={fiat}
      onFiatChange={handleFiatChange}
    >
      <MarketsList
        fiat={fiat}
        markets={markets}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </DefaultLayout>
  );
};