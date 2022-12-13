import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useCurrencies } from '../hooks/currencies';
import { useLocalStorage } from '../hooks/localStorage';
import Header from '../components/Header';
import CurrencyList from '../components/CurrencyList';
import FixedBottomBar from '../components/FixedBottomBar';

export default function Home() {
  const fiatOptions = ['eur', 'usd'];
  const [view, setView] = useState('all');
  const [fiat, setFiat] = useLocalStorage({ key: 'fiat', defaultValue: 'usd' });
  const [currencies, updateCurrencies] = useCurrencies({ fiat });

  return (
    <>
      <Header
        fiatOptions={fiatOptions}
        selectedFiat={fiat}
        onFiatChange={(fiat) => {
          setFiat(fiat)
          updateCurrencies({ fiat });
        }}
      />
      <Box sx={{ pb: 7 }}>
        <CurrencyList
          fiat={fiat}
          currencies={currencies}
          filter={{ view }}
        />
        <FixedBottomBar
          view={view}
          onViewChange={setView}
        />
      </Box>
    </>
  );
};