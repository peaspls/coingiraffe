import React from 'react';
import { createUseStyles } from 'react-jss';
import Price from './Price';
import PriceChange from './PriceChange';

const useStyles = createUseStyles({
  priceGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  }
});

const PriceGroup = (props) => {
  const cls = useStyles();
  const { price, fiat , priceChange, className } = props;

  return (
    <div className={className}>
      <div className={cls.priceGroup}>
        <Price value={price} fiat={fiat} />
        <PriceChange value={priceChange} />
      </div>
    </div>
  );
}

export default PriceGroup;