import React from 'react';
import giraffeSmall from '../assets/giraffe_small.png';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="giraffe-sm" src={giraffeSmall} alt="Giraffe Logo" />
      <h1 className="header-text">Coingiraffe</h1>
    </div>  
  );
}

export default Header;