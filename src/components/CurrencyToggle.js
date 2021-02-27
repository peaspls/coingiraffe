import React from 'react';
import ShortSelector from './ShortSelector';

const CurrencyToggle = (props) => {
  const { value, onChange, className } = props;
  const options = ['eur', 'usd'];

  return (
    <div className={className}>
      <ShortSelector
        options={options}
        selected={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CurrencyToggle;