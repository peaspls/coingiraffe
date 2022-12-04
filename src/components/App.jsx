import React, { useState, Fragment } from 'react';
import Header from './Header';
import CurrencyList from './CurrencyList';
import Box from '@mui/material/Box';
import FixedBottomBar from './FixedBottomBar';
import { useCurrencies } from '../hooks/currencies';
import { useLocalStorage } from '../hooks/localStorage';

const App = () => {
  const fiatOptions = ['eur', 'usd'];
  const [view, setView] = useState('all');
  const [fiat, setFiat] = useLocalStorage({ key: 'fiat', defaultValue: 'usd' });
  const [currencies, updateCurrencies] = useCurrencies({ fiat });

  return (
    <Fragment>
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
        <FixedBottomBar view={view} onViewChange={setView} />
      </Box>
    </Fragment>
  );
};

export default App;