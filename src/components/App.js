import React, { useState, useEffect } from 'react';
import Header from './Header';
import CurrencyList from './CurrencyList';
import AppBar from './AppBar';
import { getCurrencies } from '../lib/api';
import { useInterval } from './Hooks';
import './App.scss';

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [updatedTime, setUpdatedTime] = useState(new Date());
  const [view, setView] = useState('all');
  const fiat = '€';

  useEffect(() => {
    (async () => {
      const currencies = await getCurrencies();
      setCurrencies(currencies);
    })();    
  }, [updatedTime]);

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
      <AppBar 
        view={view} 
        onViewChange={setView} 
      />
    </div>
  );
};

export default App;