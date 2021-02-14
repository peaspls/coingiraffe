import React from 'react';
import { priceChange } from '../lib/formatter';
import './PriceChange.scss';

const PriceChange = (props) => {
  const { value } = props;

  return (
    <div className={"change " + (value > 0 ? 'pos' : 'neg')}>
      {priceChange(value)}
    </div>
  );
}

export default PriceChange;