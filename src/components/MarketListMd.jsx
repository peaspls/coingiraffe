import React from 'react';
import { price, priceChange } from '../lib/formatter';
import FavoriteBtn from './FavoriteBtn';

export default function MarketsListMd(props) {
  const { fiat, markets, favorites, onToggleFavorite } = props;

  return (
    <section className='dark:bg-darkbody text-neutral-600 dark:text-stone-200 p-2'>
      <header className='grid-cols-[auto_100px_70px] h-16 grid justify-items-stretch font-medium items-center text-base'>
        <div className='w-auto p-1'>Coin</div>
        <div className='p-1 justify-self-end'>Price</div>
        <div className='p-1 justify-self-end'>24h</div>
      </header>
      <div>
        {markets?.map((row) => (
          <div
            className='dark:border-stone-800 grid-cols-[auto_100px_70px] min-h-[70px] pt-2 pb-2 grid justify-items-stretch font-normal items-center border-b first:border-t'
            key={row.id}>
            <div className='w-auto flex m-[-5px]'>
              <FavoriteBtn
                isOn={favorites[row.id]}
                onClick={() => onToggleFavorite(row.id)}
              />
              <div className='flex items-center ml-1'>
                <img
                  className='w-5 mr-2'
                  src={row.image}
                  alt={`${row.symbol} Logo`}
                />
                <div>
                  <div className='text-base font-medium'>{row.name}</div>
                  <div className='flex items-center'>
                    <div className='bg-stone-100 dark:bg-gray-800 dark:text-neutral-400 text-sm px-1 py-0 mr-1 rounded'>
                      {row.market_cap_rank}
                    </div>
                    <div className='dark:text-neutral-400 text-sm uppercase'>
                      {row.symbol}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='p-1 justify-self-end'>
              <span className='text-base'>
                {fiat === 'eur' ? '€' : '$'}
                {price(row.current_price)}
              </span>
            </div>

            <div className='p-1 justify-self-end'>
              <span
                className={`text-base ${
                  row.price_change_percentage_24h_in_currency > 0
                    ? 'text-emerald-600'
                    : 'text-rose-600'
                }`}>
                {priceChange(row.price_change_percentage_24h_in_currency)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
