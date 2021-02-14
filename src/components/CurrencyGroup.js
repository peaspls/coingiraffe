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
        <div>
          <span className="rank">#{data.market_cap_rank}</span>
          <span className="symbol">{data.symbol}</span>
        </div>
        <div className="market-cap">{fiat}{marketCap(data.market_cap)}</div>
      </div>
    </div>      
  );
}

export default CurrencyGroup;