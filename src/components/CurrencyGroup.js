import React from 'react';
import Favorite from './Favorite';
import { marketCap } from '../lib/formatter';
import './CurrencyGroup.scss';

const CurrencyGroup = (props) => {
  const { data, favorites, fiat, onToggleFavorite } = props;

  return (          
    <div className="currency-group">
      <Favorite
        active={favorites[data.id] !== undefined} 
        onClick={() => onToggleFavorite(data.id)}
      />
      <div className="currency-col">
        <div className="currency-row">          
          <img className="image" src={data.image} />
          <span className="symbol">{data.symbol}</span>
        </div>
        <div className="currency-row">
          <span className="rank">#{data.market_cap_rank}</span>
          <span className="market-cap">{fiat}{marketCap(data.market_cap)}</span>
        </div>
      </div>
    </div>      
  );
}

export default CurrencyGroup;