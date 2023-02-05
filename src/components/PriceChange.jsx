import React from 'react';
import Typography from '@mui/material/Typography';
import { priceChange } from '../lib/formatter';

export default function PriceChange(props) {
  const { value, className } = props;

  return (
    <div className={className}>
      <Typography
        style={{ fontSize: '0.9rem' }}
        component="div"
        color={`${value > 0 ? "success.main" : "error.main"}`}
      >
        {priceChange(value)}
      </Typography>
    </div>
  );
}