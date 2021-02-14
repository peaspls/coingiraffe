import React from 'react';
import FavoriteIcon from './FavoriteIcon';
import FavoriteBorderIcon from './FavoriteBorderIcon';
import './Favorite.scss';

const Favorite = (props) => {
  return (
    <div>
    {
      props.active
      ? <button className="favorite-btn" onClick={(e) => props.onClick(e)}>
          <FavoriteIcon 
            fill="rgb(240, 133, 19)" 
            width="18px"
            height="18px"
            className="favorite" 
          />
        </button>
      : <button className="favorite-btn" onClick={(e) => props.onClick(e)}>
          <FavoriteBorderIcon 
            fill="rgb(135, 135, 135)" 
            width="18px"
            height="18px"
            className="favorite" 
          />
        </button>
    }        
    </div> 
  );
}

export default Favorite;