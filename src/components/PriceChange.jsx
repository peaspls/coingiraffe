import React from 'react';
import { createUseStyles } from 'react-jss';
import { priceChange } from '../lib/formatter';

const useStyles = createUseStyles({
  change: {
    fontSize: '0.9rem',
    lineHeight: '20px'
  },
  pos: {
    color: 'rgba(106, 175, 2, 1)'
  },
  neg: {
    color: 'rgba(205, 42, 23, 1)'
  }
});

const PriceChange = (props) => {
  const cls = useStyles();
  const { value, className } = props;

  return (
    <div className={className}>
      <div className={`${cls.change} ${value > 0 ? cls.pos : cls.neg}`}>
        {priceChange(value)}
      </div>
    </div>
  );
}

export default PriceChange;