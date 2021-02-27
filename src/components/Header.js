import React from 'react';
import { createUseStyles } from 'react-jss'
import CurrencyToggle from './CurrencyToggle';
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
  },
  toggle: {
    display: 'flex',
    justifyContent: 'flex-end',    
    width: '100%'
  }
});

const Header = (props) => {
  const cls = useStyles();
  const { onFiatChange, fiat } = props;

  return (
    <header className={cls.header}>
      <img className={cls.logo} src={giraffe} alt="Giraffe Logo" />
      <h1 className={cls.text}>Coingiraffe</h1>
      <CurrencyToggle className={cls.toggle} value={fiat} onChange={onFiatChange} />
    </header>  
  );
}

export default Header;