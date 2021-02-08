import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './Header';
import AllCoins from './AllCoins';
import { useInterval } from './Hooks';
import './App.scss';

const getPrices = async () => {
  return axios.get("/prices")
  .then(response => {
    return response.data;
  })
  .catch(err => {
    console.log("Error fetching data from server", err);
  });
};

const App = () => {
  const [prices, setPrices] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [time, setTime] = useState('1d');
  const fiat = '€';

  useEffect(() => {
    (async () => {
      const result = await getPrices();
      setPrices(result);
    })();    
  }, []);

  useInterval(() => {
    (async () => {
      const result = await getPrices();
      setPrices(result);
    })();
  }, 10000);

  const toggleFavorite = (currency) => {
    const change = {
      ...favorites
    };
    if(change[currency] === undefined) {
      change[currency] = true;
    } else {
      delete change[currency];
    }

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