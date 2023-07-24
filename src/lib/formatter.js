import numeral from "numeral";

const price = (number) => {
  return numeral(number).format("0,0.[00000000]");
};

const marketCap = (number) => {
  return numeral(number).format("0.0a");
};

const priceChange = (number) => {
  return (number > 0 ? "+" : "") + numeral(number).format("0.00") + "%";
};

export { price, marketCap, priceChange };
