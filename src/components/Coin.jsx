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
    display: 'flex',
    alignItems: 'center',
  },
  rank: {
    fontSize: 12,
    marginRight: 5,
    color: '#796d6d'
  },
  image: {
    width: 20,
    height: 20,
    margin: '0 5px 0 0'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  symbol: {
    margin: '0 10px',
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#796d6d',
  }
});

export default function Coin(props) {
  const cls = useStyles();
  const { id, name, image, symbol, marketCap, marketCapRank, favorites, fiat, onToggleFavorite, className } = props;

  return (
    <div className={className}>
      <div className={cls.currencyGroup}>
        <Favorite
          active={favorites[id] !== undefined}
          onClick={() => onToggleFavorite(id)}
        />
        <div className={cls.currencyCol}>
          <div className={cls.currencyRow}>
            <img className={cls.image} src={image} />
            <span className={cls.name}>{name}</span>
            <span className={cls.symbol}>{symbol}</span>
          </div>
          <div className={cls.currencyRow}>
            <span className={cls.rank}>#{marketCapRank}</span>
            <Price short value={marketCap} fiat={fiat} />
          </div>
        </div>
      </div>
    </div>
  );
}