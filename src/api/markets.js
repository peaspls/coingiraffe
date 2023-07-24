import axios from "axios";
import markets from "../mock/markets";

const baseApiURL = "https://api.coingecko.com/api/v3";

const getMarkets = async (marketParams, options) => {
  if (options?.mock) {
    return markets;
  }

  const urlParams = new URLSearchParams(marketParams);
  const url = `${baseApiURL}/coins/markets?${urlParams}`;
  const { data } = await axios.get(url);
  return data;
};

export { getMarkets };
