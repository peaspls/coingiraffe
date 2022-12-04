import React from 'react';
import { createUseStyles } from 'react-jss'
import ShortSelector from './ShortSelector';

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
  const { fiatOptions, selectedFiat, onFiatChange } = props;

  return (
    <header className={cls.header}>
      <img className={cls.logo} src="/giraffe.svg" alt="Giraffe Logo" />
      <h1 className={cls.text}>Coingiraffe</h1>
      <ShortSelector
        className={cls.toggle}
        options={fiatOptions}
        value={selectedFiat}
        onChange={onFiatChange}
      />
    </header>
  );
}

export default Header;