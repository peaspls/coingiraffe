import React from 'react';
import { createUseStyles } from 'react-jss'
import giraffe from '../assets/giraffe.svg';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px 12px'
  },
  logo: {
    width: 30,
    marginRight: 10
  },
  text: {
    margin: 0
  }
});

const Header = () => {
  const cls = useStyles();

  return (
    <header className={cls.header}>
      <img className={cls.logo} src={giraffe} alt="Giraffe Logo" />
      <h1 className={cls.text}>Coingiraffe</h1>
    </header>  
  );
}

export default Header;