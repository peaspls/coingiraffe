import React from 'react';
import { createUseStyles } from 'react-jss';
import Favorite from './Favorite';
import Price from './Price';

const useStyles = createUseStyles({
  currencyGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  currencyCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  currencyRow: {
    display: 'flex'
  },
  rank: {
    fontSize: 12,
    lineHeight: '20px',
    marginRight: 5,
    color: '#796d6d'
  },
  image: {
    width: 20,
    height: 20,
    margin: '0 5px 0 0'
  },
  symbol: {
    textTransform: 'uppercase',
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 'bold'
  }
});

const CurrencyGroup = (props) => {
  const cls = useStyles();
  const { data, favorites, fiat, onToggleFavorite, className } = props;

  return (      
    <div className={className}>
      <div className={cls.currencyGroup}>
        <Favorite
          active={favorites[data.id] !== undefined} 
          onClick={() => onToggleFavorite(data.id)}
        />
        <div className={cls.currencyCol}>
          <div className={cls.currencyRow}>          
            <img className={cls.image} src={data.image} />
            <span className={cls.symbol}>{data.symbol}</span>
          </div>
          <div className={cls.currencyRow}>
            <span className={cls.rank}>#{data.market_cap_rank}</span>
            <Price format='short' value={data.market_cap} fiat={fiat} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyGroup;