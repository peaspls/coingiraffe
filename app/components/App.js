import React, { useState, useEffect } from 'react';
import Header from './Header';
import AllCoins from './AllCoins';
import AppBar from './AppBar';
import { getPrices } from './Api';
import { useInterval } from './Hooks';
import './App.scss';

const App = () => {
  const [allPrices, setAllPrices] = useState([]);
  const [favoritePrices, setFavoritePrices] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [updatedTime, setUpdatedTime] = useState(new Date());
  const [time, setTime] = useState('1d');
  const [statView, setStatView] = useState('all');
  const fiat = '€';

  useEffect(() => {
    (async () => {
      const allPrices = await getPrices();
      setAllPrices(allPrices);      
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

    const favoritePrices = allPrices.filter(p => change[p.currency] !== undefined);

    setFavoritePrices(favoritePrices);
    setFavorites(change);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-bar-space">
        {
          statView === 'all'
          ? <AllCoins prices={allPrices} fiat={fiat} favorites={favorites} time={time}
              onToggleFavorite={toggleFavorite}
              onSetTime={setTime}        
            />
          : <AllCoins prices={favoritePrices} fiat={fiat} favorites={favorites} time={time} 
              onToggleFavorite={toggleFavorite}
              onSetTime={setTime}        
            />
        }   
      </div>      
      <AppBar statView={statView} 
        onSetStatView={setStatView} 
      />
    </div>
  );
};

export default App;