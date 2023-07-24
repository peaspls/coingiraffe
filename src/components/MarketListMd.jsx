import React from "react";
import { price, priceChange } from "../lib/formatter";
import FavoriteBtn from "./FavoriteBtn";

export default function MarketsListMd(props) {
  const { fiat, markets, favorites, onToggleFavorite } = props;

  return (
    <section className="p-2 text-neutral-600 dark:bg-darkbody dark:text-stone-200">
      <header className="grid h-16 grid-cols-[auto_100px_70px] items-center justify-items-stretch text-base font-medium">
        <div className="w-auto p-1">Coin</div>
        <div className="justify-self-end p-1">Price</div>
        <div className="justify-self-end p-1">24h</div>
      </header>
      <div>
        {markets?.map((row) => (
          <div
            className="grid min-h-[70px] grid-cols-[auto_100px_70px] items-center justify-items-stretch border-b pb-2 pt-2 font-normal first:border-t dark:border-stone-800"
            key={row.id}
          >
            <div className="m-[-5px] flex w-auto">
              <FavoriteBtn
                isOn={favorites[row.id]}
                onClick={() => onToggleFavorite(row.id)}
              />
              <div className="ml-1 flex items-center">
                <img
                  className="mr-2 w-5"
                  src={row.image}
                  alt={`${row.symbol} Logo`}
                />
                <div>
                  <div className="text-base font-medium">{row.name}</div>
                  <div className="flex items-center">
                    <div className="mr-1 rounded bg-stone-100 px-1 py-0 text-sm dark:bg-gray-800 dark:text-neutral-400">
                      {row.market_cap_rank}
                    </div>
                    <div className="text-sm uppercase dark:text-neutral-400">
                      {row.symbol}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-self-end p-1">
              <span className="text-base">
                {fiat === "eur" ? "€" : "$"}
                {price(row.current_price)}
              </span>
            </div>

            <div className="justify-self-end p-1">
              <span
                className={`text-base ${
                  row.price_change_percentage_24h_in_currency > 0
                    ? "text-emerald-600"
                    : "text-rose-600"
                }`}
              >
                {priceChange(row.price_change_percentage_24h_in_currency)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
