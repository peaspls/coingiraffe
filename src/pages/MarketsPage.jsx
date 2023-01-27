import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import useEmblaCarousel from 'embla-carousel-react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useFavorites } from '../hooks/favorites';
import { useLocalStorage } from '../hooks/localStorage';
import { useMarkets } from '../hooks/markets';
import FixedBottomTabs from '../components/FixedBottomTabs';
import MarketsList from '../components/MarketsList';

const useStyles = createUseStyles({
  embla: {
    overflow: 'hidden',
  },
  emblaContainer: {
    display: 'flex',
  },
  emblaSlide: {
    flex: '0 0 100%',
    minWidth: 0,
    overflowX: 'auto',
    height: 'calc(100vh - 161px)'
  },
});

export default function MarketsPage() {
  const cls = useStyles();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, speed: 20 })
  const [tabIndex, setTabIndex] = useState(0);
  const [fiat, setFiat] = useLocalStorage({ key: 'fiat', defaultValue: 'usd' });
  const [markets, updateMarkets] = useMarkets({ fiat });
  const [favorites, toggleFavorite] = useFavorites();

  // Set tabIndex on tab change
  const handleTabIndexChange = (tabIndex) => {
    setTabIndex(tabIndex);

    if (emblaApi) {
      const jump = true
      emblaApi.scrollTo(tabIndex, jump);
    }
  }

  // Set tabIndex on carousel change
  useEffect(() => {
    const onSelect = () => {
      const tabIndex = emblaApi.selectedScrollSnap();
      setTabIndex(tabIndex);
    }

    if (emblaApi) {
      emblaApi.on('select', onSelect);
    }

    return () => {
      if (emblaApi) {
        emblaApi.off('select', onSelect);
      }
    }
  }, [emblaApi])

  return (
    <Box>
      <FixedBottomTabs value={tabIndex} onChange={handleTabIndexChange}>
        <Tab label="Markets" value={0} icon={<ShowChartRoundedIcon />} />
        <Tab label="Favorites" value={1} icon={<FavoriteRoundedIcon />} />
      </FixedBottomTabs>

      <div className={cls.embla} ref={emblaRef}>
        <div className={cls.emblaContainer}>
          <div className={cls.emblaSlide}>
            <MarketsList
              fiat={fiat}
              markets={markets}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </div>
          <div className={cls.emblaSlide}>
            Favorites
          </div>
        </div>
      </div>
    </Box>
  );
};
