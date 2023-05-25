import axios from "axios";
import config from "../config/config";
import markets from "../mock/markets";

const baseApiURL = 'https://api.coingecko.com/api/v3';

const getMarkets = async (options) => {
  const params = new URLSearchParams(options);
  const url = `${baseApiURL}/coins/markets?${params}`;

  if (config.mock) {
    return markets;
  }

  const { data } = await axios.get(url)
  return data
};

export { getMarkets };