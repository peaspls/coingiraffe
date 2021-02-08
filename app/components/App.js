import React, { useState, useEffect } from 'react';
import axios from 'axios'
import numeral from 'numeral';
import { useInterval } from './Hooks';
import './App.scss';
import giraffeSmall from '../assets/giraffe_small.png';
import FavoriteIcon from './FavoriteIcon';
import FavoriteBorderIcon from './FavoriteBorderIcon';

function priceFormatter(number) {
  return numeral(number).format('0,0[.]0000');
}

function marketCapFormatter(number) {
  return numeral(number).format('0.00a');
}

function priceChangeFormatter(number) {
  const prefix = number > 0 ? '+' : '';
  return prefix + numeral(number).format('0.00%');
}

async function getPrices() {
  return axios.get("/prices")
  .then(response => {
    return response.data;
  })
  .catch(err => {
    console.log("Error fetching data from server", err);
  });
}

function App() {
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
      <div className="header">
        <img className="giraffeSmall" src={giraffeSmall} alt="Giraffe Logo" />
        <h1 className="headerText">Coingiraffe</h1>
      </div>      
      <div>
        <div className="heading">
          <div>MARKET CAP</div>
          {
            time === '1d' 
            ? <div className="clickableHeading" onClick={() => setTime('30d')}>24H</div>
            : <div className="clickableHeading" onClick={() => setTime('1d')}>30D</div>
          }          
        </div>
        {prices.map(p => (
          <div className="row" key={p.currency}>
            <div className="currency-block">
              {
                favorites[p.currency] !== undefined
                ? <FavoriteIcon 
                    fill="rgb(240, 133, 19)" 
                    className="favorite" 
                    onClick={() => toggleFavorite(p.currency)} 
                  />
                : <FavoriteBorderIcon 
                    fill="rgb(135, 135, 135)" 
                    className="favorite" 
                    onClick={() => toggleFavorite(p.currency)} 
                  />
              }              
              <div className="currency-col">
                <div className="currency">
                  <span>{p.currency}</span>
                </div>
                <div className="market_cap">{fiat}{marketCapFormatter(p.market_cap)}</div>
              </div>
            </div>            

            <div className="price-col">
              <div className="price">{fiat}{priceFormatter(p.price)}</div>
              <div className={"price-change " + (p[time].price_change_pct > 0 ? 'price-positive' : 'price-negative')}>{priceChangeFormatter(p[time].price_change_pct)}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;