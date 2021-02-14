import React from 'react';
import { price } from '../lib/formatter';
import './Price.scss';

const Price = (props) => {
  const { value, fiat } = props;

  return (
    <div className="price">{fiat}{price(value)}</div>
  );
}

export default Price;