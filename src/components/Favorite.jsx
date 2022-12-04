import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const useStyles = createUseStyles({
  favorite: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 5,
    margin: '0 10px 0 0',
    '&:focus': {
      outline: 'none'
    }
  }
});

const Favorite = (props) => {
  const cls = useStyles();

  return (
    <button className={cls.favorite} onClick={(e) => props.onClick(e)}>
      {props.active ? <FavoriteRoundedIcon color="primary" /> : <FavoriteBorderRoundedIcon color="action" />}
    </button>
  );
}

export default Favorite;