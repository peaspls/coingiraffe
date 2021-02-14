import React, { useState, useEffect } from 'react';
import Header from './Header';
import CurrencyList from './CurrencyList';
import BottomBar from './BottomBar';
import { getCurrencies } from '../lib/api';
import { useInterval } from '../lib/interval';
import { useFavorites } from '../lib/favorites';
import './App.scss';

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [favorites, setFavorites] = useFavorites();
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

  const toggleFavorite = (id) => {
    const change = { ...favorites };
    change[id] === undefined ? change[id] = true : delete change[id];    
    setFavorites(change);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-bar-space">
        <CurrencyList 
          currencies={currencies} 
          fiat={fiat} 
          favorites={favorites}
          filter={{view}}
          onToggleFavorite={toggleFavorite} 
        />            
      </div>      
      <BottomBar 
        view={view} 
        onViewChange={setView} 
      />
    </div>
  );
};

export default App;