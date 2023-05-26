import React from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

export default function Favorite(props) {
  const { onClick, active } = props;

  return (
    <IconButton
      aria-label="Add to favorites"
      onClick={onClick}
    >
      {active
        ? <FavoriteRoundedIcon color="primary" />
        : <FavoriteBorderRoundedIcon color="action" />
      }
    </IconButton>
  );
}