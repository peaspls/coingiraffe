import React, { useState } from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useFavorites } from '../hooks/favorites';
import { useLocalStorage } from '../hooks/localStorage';
import { useMarkets } from '../hooks/markets';
import FixedBottomTabs from '../components/FixedBottomTabs';
import MarketsList from '../components/MarketsList';
import Carousel from '../components/Carousel';

export default function MarketsPage() {
  const [tab, setTab] = useState(0);
  const [fiat, setFiat] = useLocalStorage({ key: 'fiat', defaultValue: 'usd' });
  const [markets, updateMarkets] = useMarkets({ fiat });
  const [favorites, toggleFavorite] = useFavorites();

  return (
    <Box>
      <FixedBottomTabs value={tab} onChange={setTab}>
        <Tab label="Markets" value={0} icon={<ShowChartRoundedIcon />} />
        <Tab label="Favorites" value={1} icon={<FavoriteRoundedIcon />} />
      </FixedBottomTabs>

      <Carousel value={tab} onChange={setTab} options={{ loop: false, speed: 20 }}>
        <MarketsList
          fiat={fiat}
          markets={markets}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
        <div>Favorites</div>
      </Carousel>
    </Box>
  );
};
