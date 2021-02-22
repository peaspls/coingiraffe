import React from 'react';
import { createUseStyles } from 'react-jss';
import { priceChange } from '../lib/formatter';

const useStyles = createUseStyles({
  change: {
    fontSize: 14,
    lineHeight: '20px'
  },
  pos: {
    color: 'rgb(46, 174, 52)'
  },
  neg: {
    color: 'rgb(249, 103, 45)'
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