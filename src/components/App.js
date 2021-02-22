import React, { useState, useEffect, Fragment } from 'react';
import { createUseStyles } from 'react-jss';
import Header from './Header';
import CurrencyList from './CurrencyList';
import BottomBar from './BottomBar';
import { getCurrencies } from '../lib/api';
import { useInterval } from '../lib/interval';
import { useFavorites } from '../lib/favorites';

const useStyles = createUseStyles({
  appBarSpace: {
    marginBottom: 50
  }
});

const App = () => {
  const cls = useStyles();
  const [currencies, setCurrencies] = useState([]);
  const [favorites, toggleFavorite] = useFavorites();
  const [updatedTime, setUpdatedTime] = useState(new Date());
  const [view, setView] = useState('all');
  const fiat = '€';

  // Load currencies on mount and whenever updatedTime has changed
  useEffect(() => {
    (async () => {
      const currencies = await getCurrencies();
      setCurrencies(currencies);
    })();    
  }, [updatedTime]);

  // Change updated time every 10s to trigger loading currencies
  useInterval(() => {
    setUpdatedTime(new Date());
  }, 10000);

  return (
    <Fragment>
      <Header />
      <main className={cls.appBarSpace}>
        <CurrencyList 
          currencies={currencies} 
          fiat={fiat} 
          favorites={favorites}
          filter={{view}}
          onToggleFavorite={toggleFavorite} 
        />            
      </main>      
      <BottomBar 
        view={view} 
        onViewChange={setView} 
      />
    </Fragment>
  );
};

export default App;