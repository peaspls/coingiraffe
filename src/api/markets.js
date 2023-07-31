import axios from "axios";
import markets from "../mock/markets";
import marketsWithSparkline from "../mock/marketsWithSparkline";

const baseApiURL = "https://api.coingecko.com/api/v3";

const getMarkets = async (marketParams, options) => {
  if (options?.mock) {
    const mock = marketParams.sparkline ? marketsWithSparkline : markets;
    console.log("Returning mock data for markets", mock);
    return mock;
  }

  const urlParams = new URLSearchParams(marketParams);
  const url = `${baseApiURL}/coins/markets?${urlParams}`;
  const { data } = await axios.get(url);
  return data;
};

export { getMarkets };
