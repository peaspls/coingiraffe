import React, { useState, Fragment } from 'react';
import Header from './Header';
import CurrencyList from './CurrencyList';
import Box from '@mui/material/Box';
import FixedBottomBar from './FixedBottomBar';
import { useCurrencies } from '../hooks/currencies';
import { useLocalStorage } from '../hooks/localStorage';

const App = () => {
  const [view, setView] = useState('all');
  const [selectedFiat, setSelectedFiat] = useLocalStorage({ key: 'fiat', defaultValue: 'eur' });
  const [result, updateCurrencies] = useCurrencies({ fiat: selectedFiat, interval: 10000 });

  const onFiatChange = async (fiat) => {
    setSelectedFiat(fiat)
    updateCurrencies({ fiat });
  };

  return (
    <Fragment>
      <Header
        fiatOptions={['eur', 'usd']}
        selectedFiat={selectedFiat}
        onFiatChange={onFiatChange}
      />
      <Box sx={{ pb: 7 }}>
        <CurrencyList
          fiat={result.fiat}
          currencies={result.currencies}
          filter={{ view }}
        />
        <FixedBottomBar view={view} onViewChange={setView} />
      </Box>
    </Fragment>
  );
};

export default App;