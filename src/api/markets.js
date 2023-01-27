const baseApiURL = 'https://api.coingecko.com/api/v3';

const fetchMarkets = async (options) => {
  const params = new URLSearchParams(options);
  const url = `${baseApiURL}/coins/markets?${params}`;

  return fetch(url)
    .then(response => response.json())
};

export { fetchMarkets };