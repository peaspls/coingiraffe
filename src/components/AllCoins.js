import React from 'react';
import FavoriteIcon from './FavoriteIcon';
import FavoriteBorderIcon from './FavoriteBorderIcon';
import { price, marketCap, priceChange } from '../lib/formatter';
import './AllCoins.scss';

const AllCoins = (props) => {
  return (
    <div>
      <div className="heading">
        <div>MARKET CAP</div>
        <div>24H</div>
      </div>
      {props.prices.map(p => (
        <div className="row" key={p.id}>
          <div className="currency-block">
            {
              props.favorites[p.id] !== undefined
              ? <FavoriteIcon 
                  fill="rgb(240, 133, 19)" 
                  width="15px"
                  height="15px"
                  className="favorite" 
                  onClick={() => props.onToggleFavorite(p.id)} 
                />
              : <FavoriteBorderIcon 
                  fill="rgb(135, 135, 135)" 
                  width="15px"
                  height="15px"
                  className="favorite" 
                  onClick={() => props.onToggleFavorite(p.id)} 
                />
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
            <div className={"price-c " + (p.price_change_percentage_24h > 0 ? 'price-p' : 'price-n')}>
              {priceChange(p.price_change_percentage_24h)}
            </div>
          </div>
        </div>
      ))}
    </div> 
  );
}

export default AllCoins;