import React from 'react';
import { createUseStyles } from 'react-jss';
import { price, marketCap } from '../lib/formatter';

const useStyles = createUseStyles({
  price: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 'normal',
  }
});

const Price = (props) => {
  const cls = useStyles();
  const { value, fiat, format, className } = props;

  return (
    <div className={className}>
      <div className={cls.price}>
        {fiat}
        {format === 'short' ? marketCap(value) : price(value)}      
      </div>
    </div>
  );
}

export default Price;