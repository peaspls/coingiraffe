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
  const [fiat, setFiat] = useLocalStorage({ key: 'fiat', defaultValue: 'eur' });
  const [result, update] = useCurrencies({ fiat, interval: 10000 });

  const onFiatChange = async (fiat) => {
    setFiat(fiat)
    update({ fiat });
  };

  return (
    <Fragment>
      <Header fiat={fiat} onFiatChange={onFiatChange} />
      <main className={cls.appBarSpace}>
        <CurrencyList fiat={result.fiat} currencies={result.currencies} filter={{view}} />            
      </main>      
      <BottomBar view={view} onViewChange={setView} />
    </Fragment>
  );
};

export default App;