import React, { Fragment, useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import CurrencyGroup from './CurrencyGroup';
import PriceGroup from './PriceGroup';
import SparkLine from './SparkLine';
import Price from './Price';
import PriceChange from './PriceChange';
import { TinyMedia, SmallMedia, MediumOrGreaterMedia } from '../lib/mediaQuery';

const useStyles = createUseStyles({
  tinyList: {
    display: 'grid',
    gridTemplateColumns: 'minmax(140px, auto) min(150px)',
    alignItems: 'center'
  },
  smallList: {
    display: 'grid',
    gridTemplateColumns: 'minmax(140px, auto) min(120px) min(80px) min(80px)',
    alignItems: 'center'
  },
  mediumList: {
    display: 'grid',
    gridTemplateColumns: 'minmax(140px, auto) min(120px) min(80px) min(80px) min(160px) min(150px)',
    alignItems: 'center'
  },
  heading: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 7,
    background: '#fdc0763d',
    color: '#262f3e',
  },
  headingFtCol: {
    justifyContent: 'flex-start'
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 7,
    alignItems: 'center',
    height: 60,
    borderBottom: '1px #e8e8e8 solid'
  },
  contentFtCol: {
    justifyContent: 'flex-start'
  }  
});

const CurrencyList = (props) => {
  const cls = useStyles();
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
      <TinyMedia>
        <div className={cls.tinyList}>
          <div className={`${cls.heading} ${cls.headingFtCol}`}>MARKET CAP</div>
          <div className={cls.heading}>24H</div>
          {currencies.map(p => (
            <Fragment key={p.id}>
              <CurrencyGroup className={`${cls.content} ${cls.contentFtCol}`} data={p} fiat={props.fiat} favorites={props.favorites} onToggleFavorite={props.onToggleFavorite} />
              <PriceGroup className={cls.content} price={p.current_price} fiat={props.fiat} priceChange={p.price_change_percentage_24h_in_currency} />   
            </Fragment>
          ))}
        </div>
      </TinyMedia>
      
      <SmallMedia>
        <div className={cls.smallList}>
          <div className={`${cls.heading} ${cls.headingFtCol}`}>MARKET CAP</div>
          <div className={cls.heading}>PRICE</div>
          <div className={cls.heading}>24H</div>
          <div className={cls.heading}>7D</div>
          {currencies.map(p => (
            <Fragment key={p.id}>
              <CurrencyGroup className={`${cls.content} ${cls.contentFtCol}`} data={p} fiat={props.fiat} favorites={props.favorites} onToggleFavorite={props.onToggleFavorite} />
              <Price className={cls.content} value={p.current_price} fiat={props.fiat} />
              <PriceChange className={cls.content} value={p.price_change_percentage_24h_in_currency} />            
              <PriceChange className={cls.content} value={p.price_change_percentage_7d_in_currency} />
            </Fragment>
          ))}
        </div>     
      </SmallMedia>

      <MediumOrGreaterMedia>
        <div className={cls.mediumList}>
          <div className={`${cls.heading} ${cls.headingFtCol}`}>MARKET CAP</div>
          <div className={cls.heading}>PRICE</div>
          <div className={cls.heading}>24H</div>
          <div className={cls.heading}>7D</div>
          <div className={cls.heading}>7D</div>
          <div className={cls.heading}>VOLUME(24H)</div>
          {currencies.map(p => (
            <Fragment key={p.id}>
              <CurrencyGroup className={`${cls.content} ${cls.contentFtCol}`} data={p} fiat={props.fiat} favorites={props.favorites} onToggleFavorite={props.onToggleFavorite} />
              <Price className={cls.content} value={p.current_price} fiat={props.fiat} />
              <PriceChange className={cls.content} value={p.price_change_percentage_24h_in_currency} />            
              <PriceChange className={cls.content} value={p.price_change_percentage_7d_in_currency} />
              <SparkLine className={cls.content} data={p.sparkline_in_7d.price} width={135} height={50} />
              <Price className={cls.content} value={p.total_volume} fiat={props.fiat} />
            </Fragment>
          ))}
        </div>
      </MediumOrGreaterMedia>
    </Fragment>
  );
}

export default CurrencyList;