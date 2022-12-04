import { useState, useEffect } from 'react';
import { useInterval } from './interval';
import { fetchCurrencies } from '../api/currencies';

const useCurrencies = ({ fiat = 'usd', interval }) => {
  const [currencies, setCurrencies] = useState([]);
  const [requestTime, setRequestTime] = useState(new Date());

  const updateCurrencies = (options) => {
    if (options !== undefined) {
      if (options.fiat !== undefined) {
        fiat = options.fiat;
      }

      if (options.interval !== undefined) {
        interval = options.interval;
      }
    }

    setRequestTime(new Date());
  };

  useEffect(() => {
    (async () => {
      try {
        const options = {
          vs_currency: fiat,
          order: 'market_cap_desc',
          per_page: 100,
          page: 1,
          sparkline: true,
          price_change_percentage: '24h,7d'
        };
        const currencies = await fetchCurrencies(options);
        setCurrencies(currencies);
      } catch (err) {
        console.log("Error fetching data from server", err);
      }
    })();
  }, [requestTime]);

  useInterval(() => {
    if (interval !== undefined) {
      const now = new Date();
      if (now > new Date(requestTime.getTime() + interval)) {
        setRequestTime(now);
      }
    }
  }, 250);

  return [currencies, updateCurrencies];
};

export { useCurrencies };
