import React from 'react';
import { price } from '../lib/formatter';
import './Volume.scss';

const Volume = (props) => {
  const { value, fiat } = props;

  return (
    <div className="volume">{fiat}{price(value)}</div>
  );
}

export default Volume;