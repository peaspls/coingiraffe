import React from "react";
import FavoriteBtn from "./FavoriteBtn";
import PricePercentageChange from "./PricePercentageChange";
import Price from "./Price";
import SparkLine from "./SparkLine";

export default function MarketsListMd(props) {
  const { fiat, markets, favorites, onToggleFavorite } = props;

  return (
    <section className="p-2 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
      <header className="grid h-16 grid-cols-[auto_100px_70px_70px_70px_150px_120px] items-center justify-items-stretch text-base font-medium">
        <div className="w-auto p-1">Coin</div>
        <div className="justify-self-end p-1">Price</div>
        <div className="justify-self-end p-1">1h</div>
        <div className="justify-self-end p-1">24h</div>
        <div className="justify-self-end p-1">7d</div>
        <div className="justify-self-end p-1">Market Cap</div>
        <div className="justify-self-end p-1">Last 7 days</div>
      </header>
      <div>
        {markets?.map((row) => (
          <div
            className="grid min-h-[70px] grid-cols-[auto_100px_70px_70px_70px_150px_120px] items-center justify-items-stretch border-b pb-2 pt-2 font-normal first:border-t dark:border-neutral-800"
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
                    <div className="mr-1 rounded bg-neutral-100 px-1 py-0 text-sm dark:bg-neutral-800 dark:text-neutral-300">
                      {row.market_cap_rank}
                    </div>
                    <div className="text-sm uppercase dark:text-neutral-300">
                      {row.symbol}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-self-end p-1">
              <Price value={row.current_price} fiat={fiat} />
            </div>
            <div className="justify-self-end p-1">
              <PricePercentageChange
                value={row.price_change_percentage_1h_in_currency}
              />
            </div>
            <div className="justify-self-end p-1">
              <PricePercentageChange
                value={row.price_change_percentage_24h_in_currency}
              />
            </div>
            <div className="justify-self-end p-1">
              <PricePercentageChange
                value={row.price_change_percentage_7d_in_currency}
              />
            </div>
            <div className="justify-self-end p-1">
              <Price value={row.market_cap} fiat={fiat} />
            </div>

            <div className="flex flex-col items-end justify-self-end p-1">
              <SparkLine
                width={100}
                height={50}
                data={row.sparkline_in_7d.price}
                className={`m-0 fill-none stroke-1 ${
                  row.price_change_percentage_7d_in_currency > 0
                    ? "stroke-lime-700 dark:stroke-lime-600"
                    : "stroke-red-600 dark:stroke-red-400"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
