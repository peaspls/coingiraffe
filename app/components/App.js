import React, { useState, useEffect } from 'react';
import Header from './Header';
import AllCoins from './AllCoins';
import { getPrices } from './Api';
import { useInterval } from './Hooks';
import './App.scss';

const App = () => {
  const [prices, setPrices] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [updatedTime, setUpdatedTime] = useState(new Date());
  const [time, setTime] = useState('1d');
  const fiat = '€';

  useEffect(() => {
    (async () => {
      setPrices(await getPrices());
    })();    
  }, [updatedTime]);

  useInterval(() => {
    setUpdatedTime(new Date());
  }, 10000);

  const toggleFavorite = (currency) => {
    const change = { ...favorites };

    change[currency] === undefined
      ? change[currency] = true
      : delete change[currency];

    setFavorites(change);
  };

  return (
    <div className="app">
      <Header />
      <AllCoins {...{ prices, fiat, favorites, time }} 
        onToggleFavorite={toggleFavorite}
        onSetTime={setTime}
      />
    </div>
  );
};

export default App;