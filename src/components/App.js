import React, { useState, useEffect } from 'react';
import Header from './Header';
import AllCoins from './AllCoins';
import AppBar from './AppBar';
import { getPrices } from '../lib/api';
import { useInterval } from './Hooks';
import './App.scss';

const App = () => {
  const [allPrices, setAllPrices] = useState([]);
  const [favoritePrices, setFavoritePrices] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [updatedTime, setUpdatedTime] = useState(new Date());
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

  const toggleFavorite = (id) => {
    const change = { ...favorites };

    change[id] === undefined
      ? change[id] = true
      : delete change[id];    

    const favoritePrices = allPrices.filter(p => change[p.id] !== undefined);

    setFavoritePrices(favoritePrices);
    setFavorites(change);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-bar-space">
        {
          statView === 'all'
          ? <AllCoins prices={allPrices} fiat={fiat} favorites={favorites}
              onToggleFavorite={toggleFavorite}   
            />
          : <AllCoins prices={favoritePrices} fiat={fiat} favorites={favorites}  
              onToggleFavorite={toggleFavorite}       
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