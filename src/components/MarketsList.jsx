import React from 'react';
import Coin from './Coin';
import Price from './Price';
import PriceChange from './PriceChange';

export default function MarketsList(props) {
  const { fiat, markets, favorites, onToggleFavorite } = props;

  return (
    <>
      <div>Coin</div>
      <div>Price</div>
      <div>24h</div>
      <div>7d</div>
      {markets?.map(p => (
        <div key={p.id}>
          <Coin
            id={p.id}
            name={p.name}
            symbol={p.symbol}
            image={p.image}
            marketCap={p.market_cap}
            marketCapRank={p.market_cap_rank}
            fiat={fiat}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
          <Price value={p.current_price} fiat={fiat} />
          <PriceChange value={p.price_change_percentage_24h_in_currency} />
          <PriceChange value={p.price_change_percentage_7d_in_currency} />
        </div>
      ))}
    </>
  );
}