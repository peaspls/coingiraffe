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
  logo: {
    width: 20,
    margin: '0 5px 0 0'
  },
  title: {
    fontWeight: 'bold',
    marginRight: '5px',
    fontSize: '0.9rem',
  },
  subtitle: {
    marginRight: '5px',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    color: '#796d6d'
  },
  marketCap: {
    marginRight: '5px',
  },
});

export default function Coin(props) {
  const cls = useStyles();
  const { name, image, symbol, marketCap, marketCapRank, fiat, className } = props;

  return (
    <div className={className}>
      <div className={cls.currencyGroup}>
        <div className={cls.currencyCol}>
          <div className={cls.currencyRow}>
            <img className={cls.logo} src={image} alt={`${symbol} Logo`} />
            <span className={cls.title}>{name}</span>
          </div>
          <div className={cls.currencyRow}>
            <span className={cls.rank}>#{marketCapRank}</span>
            <span className={cls.subtitle}>{symbol}</span>
          </div>
        </div>
      </div>
    </div>
  );
}