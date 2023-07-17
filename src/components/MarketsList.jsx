import React from 'react';
import { price, priceChange } from '../lib/formatter';
import FavoriteBtn from './FavoriteBtn';

export default function MarketsList(props) {
  const { fiat, markets, favorites, onToggleFavorite } = props;

  return (
    <section className="m-2">
      <header className="h-16 grid grid-cols-[auto_100px_70px] justify-items-stretch font-medium items-center text-sm text-neutral-700">
        <div className="w-auto p-1">Coin</div>
        <div className="p-1 justify-self-end">Price</div>
        <div className="p-1 justify-self-end">24h</div>
      </header>
      <div>
        {markets?.map((row) => (
          <div className="h-16 grid grid-cols-[auto_100px_70px] justify-items-stretch font-normal items-center text-sm text-neutral-700 border-b first:border-t" key={row.id} >
            <div className="w-auto p-1 flex m-[-5px]">
              <FavoriteBtn
                isOn={favorites[row.id]}
                onClick={() => onToggleFavorite(row.id)}
              />
              <div className="flex items-center ml-1">
                <img className="w-5 mr-2" src={row.image} alt={`${row.symbol} Logo`} />
                <div>
                  <div className="font-medium">{row.name}</div>
                  <div className="flex items-center">
                    <div className="text-xs px-1 py-0 mr-1 rounded bg-slate-100">{row.market_cap_rank}</div>
                    <div className="text-xs uppercase text-neutral-500">{row.symbol}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1 justify-self-end">
              {fiat === 'eur' ? '€' : '$'}{price(row.current_price)}
            </div>

            <div className={`p-1 justify-self-end ${row.price_change_percentage_24h_in_currency > 0 ? "text-emerald-600" : "text-rose-600"}`}>
              {priceChange(row.price_change_percentage_24h_in_currency)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}