import React from 'react';
import FavoriteIcon from './FavoriteIcon';
import FavoriteBorderIcon from './FavoriteBorderIcon';
import { price, marketCap, priceChange } from './Formatter';

const AllCoins = (props) => {
  return (
    <div>
      <div className="heading">
        <div>MARKET CAP</div>
        {
          props.time === '1d' 
          ? <div className="heading-btn" onClick={() => props.onSetTime('30d')}>24H</div>
          : <div className="heading-btn" onClick={() => props.onSetTime('1d')}>30D</div>
        }          
      </div>
      {props.prices.map(p => (
        <div className="row" key={p.currency}>
          <div className="currency-block">
            {
              props.favorites[p.currency] !== undefined
              ? <FavoriteIcon 
                  fill="rgb(240, 133, 19)" 
                  className="favorite" 
                  onClick={() => props.onToggleFavorite(p.currency)} 
                />
              : <FavoriteBorderIcon 
                  fill="rgb(135, 135, 135)" 
                  className="favorite" 
                  onClick={() => props.onToggleFavorite(p.currency)} 
                />
            }              
            <div className="currency-col">
              <div className="currency">
                <span>{p.currency}</span>
              </div>
              <div className="market-cap">{props.fiat}{marketCap(p.market_cap)}</div>
            </div>
          </div>            
          <div className="price-col">
            <div className="price">{props.fiat}{price(p.price)}</div>
            <div className={"price-c " + (p[props.time].price_change_pct > 0 ? 'price-p' : 'price-n')}>
              {priceChange(p[props.time].price_change_pct)}
            </div>
          </div>
        </div>
      ))}
    </div> 
  );
}

export default AllCoins;