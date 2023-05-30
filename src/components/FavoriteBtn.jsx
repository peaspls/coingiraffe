import React from 'react';
import IconButton from '@mui/material/IconButton';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded'
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default function FavoriteBtn(props) {
  const { onClick, active } = props;

  return (
    <IconButton
      aria-label="Add to favorites"
      onClick={onClick}
    >
      {active
        ? <StarRoundedIcon sx={{ fontSize: '1.3rem', color: theme => (theme.palette.warning.main) }} color="primary" />
        : <StarBorderRoundedIcon sx={{ fontSize: '1.3rem' }} color="action" />
      }
    </IconButton>
  );
}