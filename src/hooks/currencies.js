import { useState, useEffect } from 'react';
import { useInterval } from './interval';
import { getCurrencies } from '../lib/api';

const useCurrencies = (props) => {
  let fiat = props.fiat;
  const [result, setResult] = useState({ fiat, currencies: [] });
  const [requestTime, setRequestTime] = useState(new Date());
  const requestInterval = 10000;

  const update = (props) => {
    fiat = props.fiat;
    setRequestTime(new Date());
  };

  useEffect(() => {
    (async () => {
      const currencies = await getCurrencies(fiat);
      setResult({ fiat, currencies });
    })();    
  }, [requestTime]);

  useInterval(() => {
    const now = new Date();
    if(now > new Date(requestTime.getTime() + requestInterval)) {
      setRequestTime(now);
    }
  }, 1000);

  return [result, update];
};

export { useCurrencies };
