import React, { Fragment, useState, useEffect } from 'react';
import CurrencyGroup from './CurrencyGroup';
import SparkLine from './SparkLine';
import PriceChange from './PriceChange';
import { Tiny, Small, MediumOrGreater } from '../lib/mediaQuery';
import { price } from '../lib/formatter';
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
    <Fragment>
      <div className="heading">
        <div className="market-cap-heading">MARKET CAP</div>
        <Tiny>
          <div className="price-heading">24H</div>
        </Tiny>
        <Small>
          <div className="price-heading">PRICE</div>
          <div className="price-c-heading">24H</div>
          <div className="price-c-heading">7D</div>
        </Small>
        <MediumOrGreater>
          <div className="price-heading">PRICE</div>
          <div className="price-c-heading">24H</div>
          <div className="price-c-heading">7D</div>
          <div className="sparkline-heading">7D</div>
        </MediumOrGreater>
      </div>
      {currencies.map(p => (
        <div className="row" key={p.id}>
          <CurrencyGroup 
            data={p}
            fiat={props.fiat}
            favorites={props.favorites}
            onToggleFavorite={props.onToggleFavorite}
          />

          <Tiny>
            <div className="price-col">
              <div className="price">{props.fiat}{price(p.current_price)}</div>
              <PriceChange value={p.price_change_percentage_24h_in_currency} />
            </div>
          </Tiny>

          <Small>
            <div className="price">{props.fiat}{price(p.current_price)}</div>
            <PriceChange value={p.price_change_percentage_24h_in_currency} />            
            <PriceChange value={p.price_change_percentage_7d_in_currency} />            
          </Small>

          <MediumOrGreater>
            <div className="price">{props.fiat}{price(p.current_price)}</div>
            <PriceChange value={p.price_change_percentage_24h_in_currency} />            
            <PriceChange value={p.price_change_percentage_7d_in_currency} />
            <SparkLine
              data={p.sparkline_in_7d.price}
              width={135}
              height={50}
            />
          </MediumOrGreater>
        </div>
      ))}
    </Fragment> 
  );
}

export default CurrencyList;