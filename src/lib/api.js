const baseApiURL = 'https://api.coingecko.com/api/v3';

const getPrices = async () => {
  const params = new URLSearchParams({
    vs_currency: 'eur',
    order: 'market_cap_desc',
    per_page: 100,
    page: 1,
    sparkline: false,
    price_change_percentage: '24h'
  });

  const url = `${baseApiURL}/coins/markets?${params}`; 

  return fetch(url)
    .then(response => response.json())
    .catch(err => {
      console.log("Error fetching data from server", err);
    });
};

export { getPrices };