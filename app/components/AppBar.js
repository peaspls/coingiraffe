import React from 'react';
import LeaderBoardIcon from './LeaderBoardIcon';
import FavoriteIcon from './FavoriteIcon';
import './AppBar.scss';

const AppBar = (props) => {
  return (
    <div className="app-bar">
      <LeaderBoardIcon 
        fill={props.statView === 'all' ? "white" : "rgb(135, 135, 135)"} 
        width="25px"
        height="25px"
        onClick={() => props.onSetStatView('all')} 
      />
      <FavoriteIcon 
        fill={props.statView === 'favorite' ? "white" : "rgb(135, 135, 135)"} 
        width="25px"
        height="25px"
        onClick={() => props.onSetStatView('favorite')} 
      />
    </div>  
  );
}

export default AppBar;