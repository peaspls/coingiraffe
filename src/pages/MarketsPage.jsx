import React from "react";
import { useQuery } from "@tanstack/react-query";
import config from "../config/config";
import { useFavorites } from "../hooks/favorites";
import { getMarkets } from "../api/markets";
import MarketsList from "../components/MarketsList";
import Header from "../components/Header";

export default function MarketsPage() {
  const [favorites, toggleFavorite] = useFavorites();

  const marketParams = {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 50,
    page: 1,
    sparkline: false,
    price_change_percentage: "1h,24h,7d",
  };

  const query = useQuery({
    queryKey: ["markets", marketParams],
    // refetchInterval: 10000, // 10s
    keepPreviousData: true,
    queryFn: async () => getMarkets(marketParams, { mock: config.mock }),
  });

  return (
    <>
      <Header title="CoinGiraffe" />
      <MarketsList
        fiat={"usd"}
        markets={query.data}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
}
