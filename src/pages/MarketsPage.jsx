import React, { useState } from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useQuery } from '@tanstack/react-query'
import { useFavorites } from '../hooks/favorites';
import { getMarkets } from '../api/markets';
import Header from '../components/Header';
import Nav from '../components/Nav';
import MarketsList from '../components/MarketsList';
import Carousel from '../components/Carousel';

export default function MarketsPage() {
  const [tab, setTab] = useState(0);
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
    <>
      <Header />
      <Carousel
        value={tab}
        onChange={setTab}
        options={{ draggable: false, loop: false, speed: 20 }}
      >
        <Box>
          <MarketsList
            fiat={'usd'}
            markets={query.data}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </Box>
        <Box>
          <Typography variant="h6" component="div">
            Favorites
          </Typography>
        </Box>
      </Carousel>
      <Nav value={tab} onChange={setTab}>
        <Tab label="Markets" value={0} icon={<ShowChartRoundedIcon />} />
        <Tab label="Favorites" value={1} icon={<FavoriteRoundedIcon />} />
      </Nav>
    </>
  );
};
