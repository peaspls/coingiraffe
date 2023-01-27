import React, { useState } from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import Tab from '@mui/material/Tab';
import { useFavorites } from '../hooks/favorites';
import { getMarkets } from '../api/markets';
import Nav from '../components/Nav';
import MarketsList from '../components/MarketsList';
import Carousel from '../components/Carousel';
import { useQuery } from '@tanstack/react-query'

export default function MarketsPage() {
  const [tab, setTab] = useState(0);
  const [favorites, toggleFavorite] = useFavorites();

  const marketQueryOptions = {
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 50,
    page: 1,
    sparkline: true,
    price_change_percentage: '24h,7d'
  };

  const query = useQuery({
    queryKey: ['markets', marketQueryOptions],
    // refetchInterval: 10000, // 10s
    keepPreviousData: true,
    queryFn: async () => getMarkets(marketQueryOptions)
  });

  return (
    <>
      <Carousel
        value={tab}
        onChange={setTab}
        options={{ draggable: false, loop: false, speed: 20 }}
      >
        <MarketsList
          fiat={'usd'}
          markets={query.data}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        <div>Favorites</div>
      </Carousel>
      <Nav value={tab} onChange={setTab}>
        <Tab label="Markets" value={0} icon={<ShowChartRoundedIcon />} />
        <Tab label="Favorites" value={1} icon={<FavoriteRoundedIcon />} />
      </Nav>
    </>
  );
};
