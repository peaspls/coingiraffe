import React, { useState, Fragment } from 'react';
import { createUseStyles } from 'react-jss';
import { useCurrencies } from '../hooks/currencies';
import { useLocalStorage } from '../hooks/localStorage';
import Header from './Header';
import CurrencyList from './CurrencyList';
import BottomBar from './BottomBar';

const useStyles = createUseStyles({
  appBarSpace: {
    marginBottom: 50
  }
});

const App = () => {
  const cls = useStyles();
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
      <main className={cls.appBarSpace}>
        <CurrencyList 
          fiat={result.fiat} 
          currencies={result.currencies} 
          filter={{view}} 
        />
      </main>      
      <BottomBar view={view} onViewChange={setView} />
    </Fragment>
  );
};

export default App;