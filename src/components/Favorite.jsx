import React from 'react';
import IconButton from '@mui/material/IconButton';
import { createUseStyles } from 'react-jss'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const useStyles = createUseStyles({
  favorite: {
    margin: '0 10px 0 0 !important',
  }
});

const Favorite = (props) => {
  const cls = useStyles();

  return (
    <IconButton className={cls.favorite} aria-label="Add to favorites" onClick={(e) => props.onClick(e)}>
      {props.active ? <FavoriteRoundedIcon color="primary" /> : <FavoriteBorderRoundedIcon color="action" />}
    </IconButton>
  );
}

export default Favorite;