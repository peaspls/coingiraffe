import React, { Fragment, useState, useEffect } from 'react';
import CurrencyGroup from './CurrencyGroup';
import PriceGroup from './PriceGroup';
import SparkLine from './SparkLine';
import Price from './Price';
import PriceChange from './PriceChange';
import Volume from './Volume';
import { Tiny, Small, MediumOrGreater } from '../lib/mediaQuery';
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
        <div className="market-cap-heading box-heading">MARKET CAP</div>
        <Tiny>
          <div className="price-heading box-heading">24H</div>
        </Tiny>
        <Small>
          <div className="price-heading box-heading">PRICE</div>
          <div className="price-c-heading box-heading">24H</div>
          <div className="price-c-heading box-heading">7D</div>
        </Small>
        <MediumOrGreater>
          <div className="price-heading box-heading">PRICE</div>
          <div className="price-c-heading box-heading">24H</div>
          <div className="price-c-heading box-heading">7D</div>
          <div className="sparkline-heading box-heading">7D</div>
          <div className="volume-heading box-heading">VOLUME(24H)</div>
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
            <PriceGroup 
              price={p.current_price} 
              fiat={props.fiat}
              priceChange={p.price_change_percentage_24h_in_currency}
            />            
          </Tiny>

          <Small>
            <Price value={p.current_price} fiat={props.fiat} />
            <PriceChange value={p.price_change_percentage_24h_in_currency} />            
            <PriceChange value={p.price_change_percentage_7d_in_currency} />            
          </Small>

          <MediumOrGreater>
            <Price value={p.current_price} fiat={props.fiat} />
            <PriceChange value={p.price_change_percentage_24h_in_currency} />            
            <PriceChange value={p.price_change_percentage_7d_in_currency} />
            <SparkLine
              data={p.sparkline_in_7d.price}
              width={135}
              height={50}
            />
            <Volume value={p.total_volume} fiat={props.fiat} />
          </MediumOrGreater>
        </div>
      ))}
    </Fragment> 
  );
}

export default CurrencyList;