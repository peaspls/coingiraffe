import React, { useState, useEffect } from 'react';
import FavoriteIcon from './FavoriteIcon';
import FavoriteBorderIcon from './FavoriteBorderIcon';
import { price, marketCap, priceChange } from '../lib/formatter';
import './CurrencyList.scss';

const CurrencyList = (props) => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    if(props.filter.view === 'favorite') {
      setCurrencies(props.currencies.filter(e => props.favorites[e.id] !== undefined));
    } else {
      setCurrencies(props.currencies);
    }
    
  }, [props.filter]);

  return (
    <div>
      <div className="heading">
        <div>MARKET CAP</div>
        <div>24H</div>
      </div>
      {currencies.map(p => (
        <div className="row" key={p.id}>
          <div className="currency-block">
            {
              props.favorites[p.id] !== undefined
              ? <button className="favorite-btn" onClick={() => props.onToggleFavorite(p.id)}>
                  <FavoriteIcon 
                    fill="rgb(240, 133, 19)" 
                    width="18px"
                    height="18px"
                    className="favorite" 
                  />
                </button>
              : <button className="favorite-btn" onClick={() => props.onToggleFavorite(p.id)}>
                  <FavoriteBorderIcon 
                    fill="rgb(135, 135, 135)" 
                    width="18px"
                    height="18px"
                    className="favorite" 
                  />
                </button>
            }              
            <div className="currency-col">
              <div className="currency">
                <span>{p.symbol}</span>
              </div>
              <div className="market-cap">{props.fiat}{marketCap(p.market_cap)}</div>
            </div>
          </div>            
          <div className="price-col">
            <div className="price">{props.fiat}{price(p.current_price)}</div>
            <div className={"price-c " + (p.price_change_percentage_24h_in_currency > 0 ? 'price-p' : 'price-n')}>
              {priceChange(p.price_change_percentage_24h_in_currency)}
            </div>
          </div>
        </div>
      ))}
    </div> 
  );
}

export default CurrencyList;