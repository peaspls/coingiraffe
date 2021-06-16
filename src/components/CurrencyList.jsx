import React, { Fragment, useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import MediaQuery from 'react-responsive';
import { useFavorites } from '../hooks/favorites';
import CurrencyGroup from './CurrencyGroup';
import SparkLine from './SparkLine';
import Price from './Price';
import PriceChange from './PriceChange';

const useStyles = createUseStyles({
  tinyList: {
    display: 'grid',
    gridTemplateColumns: 'minmax(100px, auto) min(100px) min(70px)',
    alignItems: 'center'
  },
  smallList: {
    display: 'grid',
    gridTemplateColumns: 'minmax(100px, auto) min(100px) min(70px) min(70px)',
    alignItems: 'center'
  },
  mediumList: {
    display: 'grid',
    gridTemplateColumns: 'minmax(100px, auto) min(100px) min(70px) min(70px) min(160px)',
    alignItems: 'center'
  },
  largeList: {
    display: 'grid',
    gridTemplateColumns: 'minmax(100px, auto) min(100px) min(70px) min(70px) min(160px) min(150px)',
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
  },
  priceHighlight: {
    fontWeight: 'bold'
  }
});

const CurrencyList = (props) => {
  const cls = useStyles();
  const { fiat, currencies, filter } = props;
  const [favorites, toggleFavorite] = useFavorites();
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);

  useEffect(() => {
    if(filter.view === 'favorite') {
      setFilteredCurrencies(currencies.filter(item => favorites[item.id] !== undefined));
    } else {
      setFilteredCurrencies(currencies);
    }    
  }, [filter, favorites]);

  return (
    <Fragment>
      <MediaQuery maxWidth={450}>
        <div className={cls.tinyList}>
          <div className={`${cls.heading} ${cls.headingFtCol}`}>MARKET CAP</div>
          <div className={cls.heading}>PRICE</div>
          <div className={cls.heading}>24H</div>
          {filteredCurrencies.map(p => (
            <Fragment key={p.id}>
              <CurrencyGroup className={`${cls.content} ${cls.contentFtCol}`} data={p} fiat={fiat} favorites={favorites} onToggleFavorite={toggleFavorite} />
              <Price className={`${cls.content} ${cls.priceHighlight}`} value={p.current_price} fiat={fiat} />
              <PriceChange className={cls.content} value={p.price_change_percentage_24h_in_currency} />
            </Fragment>
          ))}
        </div>
      </MediaQuery>
      
      <MediaQuery minWidth={451} maxWidth={600}>
        <div className={cls.smallList}>
          <div className={`${cls.heading} ${cls.headingFtCol}`}>MARKET CAP</div>
          <div className={cls.heading}>PRICE</div>
          <div className={cls.heading}>24H</div>
          <div className={cls.heading}>7D</div>
          {filteredCurrencies.map(p => (
            <Fragment key={p.id}>
              <CurrencyGroup className={`${cls.content} ${cls.contentFtCol}`} data={p} fiat={fiat} favorites={favorites} onToggleFavorite={toggleFavorite} />
              <Price className={`${cls.content} ${cls.priceHighlight}`} value={p.current_price} fiat={fiat} />
              <PriceChange className={cls.content} value={p.price_change_percentage_24h_in_currency} />
              <PriceChange className={cls.content} value={p.price_change_percentage_7d_in_currency} />
            </Fragment>
          ))}
        </div>     
      </MediaQuery>

      <MediaQuery minWidth={601} maxWidth={720}>
        <div className={cls.mediumList}>
          <div className={`${cls.heading} ${cls.headingFtCol}`}>MARKET CAP</div>
          <div className={cls.heading}>PRICE</div>
          <div className={cls.heading}>24H</div>
          <div className={cls.heading}>7D</div>
          <div className={cls.heading}>7D</div>
          {filteredCurrencies.map(p => (
            <Fragment key={p.id}>
              <CurrencyGroup className={`${cls.content} ${cls.contentFtCol}`} data={p} fiat={fiat} favorites={favorites} onToggleFavorite={toggleFavorite} />
              <Price className={`${cls.content} ${cls.priceHighlight}`} value={p.current_price} fiat={fiat} />
              <PriceChange className={cls.content} value={p.price_change_percentage_24h_in_currency} />            
              <PriceChange className={cls.content} value={p.price_change_percentage_7d_in_currency} />
              <SparkLine className={cls.content} data={p.sparkline_in_7d.price} width={135} height={50} />              
            </Fragment>
          ))}
        </div>
      </MediaQuery>

      <MediaQuery minWidth={721}>
        <div className={cls.largeList}>
          <div className={`${cls.heading} ${cls.headingFtCol}`}>MARKET CAP</div>
          <div className={cls.heading}>PRICE</div>
          <div className={cls.heading}>24H</div>
          <div className={cls.heading}>7D</div>
          <div className={cls.heading}>7D</div>
          <div className={cls.heading}>VOLUME(24H)</div>
          {filteredCurrencies.map(p => (
            <Fragment key={p.id}>
              <CurrencyGroup className={`${cls.content} ${cls.contentFtCol}`} data={p} fiat={fiat} favorites={favorites} onToggleFavorite={toggleFavorite} />
              <Price className={`${cls.content} ${cls.priceHighlight}`} value={p.current_price} fiat={fiat} />
              <PriceChange className={cls.content} value={p.price_change_percentage_24h_in_currency} />            
              <PriceChange className={cls.content} value={p.price_change_percentage_7d_in_currency} />
              <SparkLine className={cls.content} data={p.sparkline_in_7d.price} width={135} height={50} />
              <Price className={cls.content} value={p.total_volume} fiat={fiat} />
            </Fragment>
          ))}
        </div>
      </MediaQuery>
    </Fragment>
  );
}

export default CurrencyList;