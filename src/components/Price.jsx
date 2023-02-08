import React from 'react';
import { createUseStyles } from 'react-jss';
import { price, marketCap } from '../lib/formatter';

const useStyles = createUseStyles({
  price: {
    fontSize: '0.875rem',
    fontWeight: '400',
  }
});

const Price = (props) => {
  const cls = useStyles();
  const { value, fiat, short, className } = props;

  return (
    <div className={`${cls.price} ${className}`}>
      {fiat === 'eur' ? '€' : '$'}
      {short ? marketCap(value) : price(value)}
    </div>
  );
}

export default Price;