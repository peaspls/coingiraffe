import React from 'react';
import Toggle from './Toggle';

const CurrencyToggle = (props) => {
  const { value, onChange, className } = props;

  const onCurrencyChange = (event) => {
    onChange(event.target.checked ? 'usd' : 'eur');
  };

  return (
    <div className={className}>
      <Toggle 
        offText="EUR"
        onText="USD" 
        offBackgroundColor="rgb(63,60,171)"
        onBackgroundColor="rgb(113,173,60)"
        offTextColor="rgb(255,255,255)"
        onTextColor="rgb(255,255,255)"
        nobColor="rgb(255,255,255)"
        isOn={value === 'usd' ? true : false} 
        onChange={onCurrencyChange}
      />
    </div>
  );
}

export default CurrencyToggle;