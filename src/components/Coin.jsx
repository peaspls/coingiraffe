import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  coin: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 20,
    margin: '0 5px 0 0'
  },
  title: {
    fontWeight: '700',
    marginRight: '5px',
    fontSize: '0.875rem',
  },
});

export default function Coin(props) {
  const cls = useStyles();
  const { name, image, symbol, className } = props;

  return (
    <div className={`${cls.coin} ${className !== undefined ? className : ''}`}>
      <img className={cls.logo} src={image} alt={`${symbol} Logo`} />
      <span className={cls.title}>{name}</span>
    </div>
  );
}