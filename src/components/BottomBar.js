import React from 'react';
import { createUseStyles } from 'react-jss';
import LeaderBoardIcon from './LeaderBoardIcon';
import FavoriteIcon from './FavoriteIcon';

const useStyles = createUseStyles({
  bar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
    height: 50,
    background: 'whitesmoke',
    borderTop: '1px solid #e4e2e2',
    overflow: 'hidden'
  },
  btn: {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 5,
    margin: '0 20px',
    '&:focus': {
      outline: 'none'
    }
  },  
  icon: {
    paddingBottom: 3
  },
  inactive: {
    borderBottom: '2px rgb(0, 0, 0, 0) solid',
    fill: 'rgb(121, 109, 109)'
  },
  active: {
    borderBottom: '2px rgb(240, 133, 19) solid',
    fill: 'rgb(240, 133, 19)'
  }
});

const BottomBar = (props) => {
  const cls = useStyles();

  return (
    <footer className={cls.bar}>
      <button className={cls.btn} onClick={() => props.onViewChange('all')}>
        <LeaderBoardIcon 
          className={`${cls.icon} ${props.view === 'all' ? cls.active : cls.inactive}`}
          width="25px"
          height="25px"
        />
      </button>
      <button className={cls.btn} onClick={() => props.onViewChange('favorite')}>
        <FavoriteIcon 
          className={`${cls.icon} ${props.view === 'favorite' ? cls.active : cls.inactive}`}
          width="25px"
          height="25px"
        />
      </button>
    </footer>  
  );
}

export default BottomBar;