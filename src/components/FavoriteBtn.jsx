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
        ? <StarRoundedIcon sx={{ color: theme => (theme.palette.warning.main) }} color="primary" />
        : <StarBorderRoundedIcon color="action" />
      }
    </IconButton>
  );
}