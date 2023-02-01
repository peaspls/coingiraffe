import React from 'react';
import { createUseStyles } from 'react-jss';
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
    fontSize: '0.9rem',
    marginRight: 5,
    color: '#796d6d'
  },
  image: {
    width: 20,
    height: 20,
    margin: '0 5px 0 0'
  },
  symbol: {
    fontWeight: 'bold',
    marginRight: '5px',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
  },
  marketCap: {
    marginRight: '5px',
  },
});

export default function Coin(props) {
  const cls = useStyles();
  const { image, symbol, marketCap, marketCapRank, fiat, className } = props;

  return (
    <div className={className}>
      <div className={cls.currencyGroup}>
        <div className={cls.currencyCol}>
          <div className={cls.currencyRow}>
            <img className={cls.image} src={image} />
            <span className={cls.symbol}>{symbol}</span>
          </div>
          <div className={cls.currencyRow}>
            <span className={cls.rank}>#{marketCapRank}</span>
            <Price className={cls.marketCap} short value={marketCap} fiat={fiat} />
          </div>
        </div>
      </div>
    </div>
  );
}