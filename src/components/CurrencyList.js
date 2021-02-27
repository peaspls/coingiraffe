import React, { Fragment, useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { TinyMediaQuery, SmallMediaQuery, MediumOrGreaterMediaQuery } from './MediaQuery';
import { useFavorites } from '../hooks/favorites';
import CurrencyGroup from './CurrencyGroup';
import PriceGroup from './PriceGroup';
import SparkLine from './SparkLine';
import Price from './Price';
import PriceChange from './PriceChange';

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
  const [favorites, toggleFavorite] = useFavorites();
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    if(props.filter.view === 'favorite') {
      setCurrencies(props.currencies.filter(item => favorites[item.id] !== undefined));
    } else {
      setCurrencies(props.currencies);
    }    
  }, [props.filter, favorites]);

  return (
    <Fragment>
      <TinyMediaQuery>
        <div className={cls.tinyList}>
          <div className={`${cls.heading} ${cls.headingFtCol}`}>MARKET CAP</div>
          <div className={cls.heading}>24H</div>
          {currencies.map(p => (
            <Fragment key={p.id}>
              <CurrencyGroup className={`${cls.content} ${cls.contentFtCol}`} data={p} fiat={props.fiat} favorites={favorites} onToggleFavorite={toggleFavorite} />
              <PriceGroup className={cls.content} price={p.current_price} fiat={props.fiat} priceChange={p.price_change_percentage_24h_in_currency} />   
            </Fragment>
          ))}
        </div>
      </TinyMediaQuery>
      
      <SmallMediaQuery>
        <div className={cls.smallList}>
          <div className={`${cls.heading} ${cls.headingFtCol}`}>MARKET CAP</div>
          <div className={cls.heading}>PRICE</div>
          <div className={cls.heading}>24H</div>
          <div className={cls.heading}>7D</div>
          {currencies.map(p => (
            <Fragment key={p.id}>
              <CurrencyGroup className={`${cls.content} ${cls.contentFtCol}`} data={p} fiat={props.fiat} favorites={favorites} onToggleFavorite={toggleFavorite} />
              <Price className={cls.content} value={p.current_price} fiat={props.fiat} />
              <PriceChange className={cls.content} value={p.price_change_percentage_24h_in_currency} />            
              <PriceChange className={cls.content} value={p.price_change_percentage_7d_in_currency} />
            </Fragment>
          ))}
        </div>     
      </SmallMediaQuery>

      <MediumOrGreaterMediaQuery>
        <div className={cls.mediumList}>
          <div className={`${cls.heading} ${cls.headingFtCol}`}>MARKET CAP</div>
          <div className={cls.heading}>PRICE</div>
          <div className={cls.heading}>24H</div>
          <div className={cls.heading}>7D</div>
          <div className={cls.heading}>7D</div>
          <div className={cls.heading}>VOLUME(24H)</div>
          {currencies.map(p => (
            <Fragment key={p.id}>
              <CurrencyGroup className={`${cls.content} ${cls.contentFtCol}`} data={p} fiat={props.fiat} favorites={favorites} onToggleFavorite={toggleFavorite} />
              <Price className={cls.content} value={p.current_price} fiat={props.fiat} />
              <PriceChange className={cls.content} value={p.price_change_percentage_24h_in_currency} />            
              <PriceChange className={cls.content} value={p.price_change_percentage_7d_in_currency} />
              <SparkLine className={cls.content} data={p.sparkline_in_7d.price} width={135} height={50} />
              <Price className={cls.content} value={p.total_volume} fiat={props.fiat} />
            </Fragment>
          ))}
        </div>
      </MediumOrGreaterMediaQuery>
    </Fragment>
  );
}

export default CurrencyList;