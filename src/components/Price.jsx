import React from "react";
import { price } from "../lib/formatter";

export default function Price(props) {
  const { value, fiat, className } = props;

  return (
    <span className={className}>
      {fiat === "eur" ? "€" : "$"}
      {price(value)}
    </span>
  );
}
