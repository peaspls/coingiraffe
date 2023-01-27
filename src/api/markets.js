import axios from "axios";

const baseApiURL = 'https://api.coingecko.com/api/v3';

const getMarkets = async (options) => {
  const params = new URLSearchParams(options);
  const url = `${baseApiURL}/coins/markets?${params}`;

  const { data } = await axios.get(url)
  return data
};

export { getMarkets };