import React from 'react';
import Price from './Price';
import PriceChange from './PriceChange';
import './PriceGroup.scss';

const PriceGroup = (props) => {
  const { price, fiat , priceChange} = props;

  return (
    <div className="price-group">
      <Price value={price} fiat={fiat} />
      <PriceChange value={priceChange} />
    </div>
  );
}

export default PriceGroup;