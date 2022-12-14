import React from 'react';
import { useLocalStorage } from '../hooks/localStorage';
import DefaultLayout from '../layout/DefaultLayout';

export default function FavoritesPage() {
  const [fiat, setFiat] = useLocalStorage({ key: 'fiat', defaultValue: 'usd' });

  function handleFiatChange(fiat) {
    setFiat(fiat);
  }

  return (
    <DefaultLayout
      navigation='/favorites'
      fiat={fiat}
      onFiatChange={handleFiatChange}
    >
      TODO
    </DefaultLayout>
  );
};