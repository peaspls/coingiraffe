import React from 'react';
import CurrencyGroup from './CurrencyGroup';
import SparkLine from './SparkLine';
import Price from './Price';
import PriceChange from './PriceChange';

export default function MarketsList(props) {
  const { fiat, markets, favorites, onToggleFavorite } = props;

  return (
    <>
      <div>MARKET CAP</div>
      <div>PRICE</div>
      <div>24H</div>
      <div>7D</div>
      <div>7D</div>
      <div>VOLUME(24H)</div>
      {markets?.map(p => (
        <div key={p.id}>
          <CurrencyGroup
            data={p}
            fiat={fiat}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
          <Price value={p.current_price} fiat={fiat} />
          <PriceChange value={p.price_change_percentage_24h_in_currency} />
          <PriceChange value={p.price_change_percentage_7d_in_currency} />
          <SparkLine
            data={p.sparkline_in_7d.price}
            width={135}
            height={50}
          />
          <Price value={p.total_volume} fiat={fiat} />
        </div>
      ))}
    </>
  );
}