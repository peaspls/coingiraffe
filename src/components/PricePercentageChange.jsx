import React from "react";
import { priceChange } from "../lib/formatter";

export default function PricePercentageChange(props) {
  const { value, className } = props;

  return (
    <span
      className={`${className} ${
        value > 0
          ? "text-lime-700 dark:text-lime-600"
          : "text-red-600 dark:text-red-400"
      }`}
    >
      {priceChange(value)}
    </span>
  );
}
