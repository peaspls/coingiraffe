import React, { useState, useEffect } from 'react';
import axios from 'axios'
import numeral from 'numeral';
import { useInterval } from './Hooks';
import './App.scss';
import giraffeSmall from '../assets/giraffe_small.png'

function priceFormatter(number) {
  return numeral(number).format('0,0[.]0000');
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

  return (
    <div className="app">
      <div className="header">
        <img className="giraffeSmall" src={giraffeSmall} alt="Giraffe Logo" />
        <h1 className="headerText">Coingiraffe</h1>
      </div>      
      <div>
        <div className="heading">
          <div>NAME</div>
          {
            time === '1d' 
            ? <div className="clickableHeading" onClick={() => setTime('30d')}>24 Hour</div>
            : <div className="clickableHeading" onClick={() => setTime('1d')}>30 Days</div>
          }          
        </div>
        {prices.map(p => (
          <div className="row" key={p.currency}>

            <div className="currency-block">
              <div className="currency-col">
                <div className="currency">
                  <span>{p.currency}</span>
                </div>
                <div className="name">{p.name}</div>
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