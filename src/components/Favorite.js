import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss'
import FavoriteIcon from './FavoriteIcon';
import FavoriteBorderIcon from './FavoriteBorderIcon';

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
    <Fragment>
    {
      props.active
      ? <button className={cls.favorite} onClick={(e) => props.onClick(e)}>
          <FavoriteIcon 
            fill="rgb(240, 133, 19)" 
            width="18px"
            height="18px"
          />
        </button>
      : <button className={cls.favorite} onClick={(e) => props.onClick(e)}>
          <FavoriteBorderIcon 
            fill="rgb(135, 135, 135)" 
            width="18px"
            height="18px"
          />
        </button>
    }        
    </Fragment> 
  );
}

export default Favorite;