import React from 'react';
import Box from '@mui/material/Box';
import { useQuery } from '@tanstack/react-query'
import { useFavorites } from '../hooks/favorites';
import { getMarkets } from '../api/markets';
import MarketsList from '../components/MarketsList';

export default function MarketsPage() {
  const [favorites, toggleFavorite] = useFavorites();

  const marketQueryOptions = {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 50,
    page: 1,
    sparkline: false,
    price_change_percentage: '24h'
  };

  const query = useQuery({
    queryKey: ['markets', marketQueryOptions],
    // refetchInterval: 10000, // 10s
    keepPreviousData: true,
    queryFn: async () => getMarkets(marketQueryOptions)
  });

  return (
    <Box>
      <MarketsList
        fiat={'usd'}
        markets={query.data}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </Box>
  );
};
