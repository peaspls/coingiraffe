import React, { Fragment, useState, useEffect } from 'react';
import SparkLine from './SparkLine';
import { price, priceChange } from '../lib/formatter';
import { Tiny, Small, MediumOrGreater } from '../lib/mediaQuery';
import './CurrencyList.scss';
import CurrencyGroup from './CurrencyGroup';

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
              <div className={"price-c " + (p.price_change_percentage_24h_in_currency > 0 ? 'price-p' : 'price-n')}>
                {priceChange(p.price_change_percentage_24h_in_currency)}
              </div>
            </div>
          </Tiny>

          <Small>
            <div className="price">{props.fiat}{price(p.current_price)}</div>
            <div className={"price-c " + (p.price_change_percentage_24h_in_currency > 0 ? 'price-p' : 'price-n')}>
              {priceChange(p.price_change_percentage_24h_in_currency)}
            </div>
            <div className={"price-c " + (p.price_change_percentage_7d_in_currency > 0 ? 'price-p' : 'price-n')}>
              {priceChange(p.price_change_percentage_7d_in_currency)}
            </div>
          </Small>

          <MediumOrGreater>
            <div className="price">{props.fiat}{price(p.current_price)}</div>
            <div className={"price-c " + (p.price_change_percentage_24h_in_currency > 0 ? 'price-p' : 'price-n')}>
              {priceChange(p.price_change_percentage_24h_in_currency)}
            </div>
            <div className={"price-c " + (p.price_change_percentage_7d_in_currency > 0 ? 'price-p' : 'price-n')}>
              {priceChange(p.price_change_percentage_7d_in_currency)}
            </div>
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