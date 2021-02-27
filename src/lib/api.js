const baseApiURL = 'https://api.coingecko.com/api/v3';

const getCurrencies = async (fiat) => {
  const params = new URLSearchParams({
    vs_currency: fiat,
    order: 'market_cap_desc',
    per_page: 100,
    page: 1,
    sparkline: true,
    price_change_percentage: '24h,7d'
  });

  const url = `${baseApiURL}/coins/markets?${params}`; 

  return fetch(url)
    .then(response => response.json())
    .catch(err => {
      console.log("Error fetching data from server", err);
    });
};

export { getCurrencies };