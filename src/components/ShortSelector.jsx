import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  selector: {
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    border: '1px solid #e4e2e2',
    background: 'whitesmoke',
    borderRadius: 5,
    userSelect: 'none'
  },
  option: {
    color: 'rgb(121, 109, 109)',
    fontWeight: 'bold',
    outline: 0,
    border: 'none',
    background: 'transparent',
    padding: 7,
    cursor: 'pointer',
  },
  selected: {
    color: 'white',
    background: 'rgb(240, 133, 19)',
    borderRadius: 5
  }

});

const ShortSelector = (props) => {
  const cls = useStyles(props);
  const { options, value, onChange, className } = props;

  return (
    <div className={className}>
      <div className={cls.selector}>
        {
          options.map(option => {
            return (
              <button 
                key={option} 
                className={`${cls.option} ${value === option ? cls.selected : ''}`} 
                onClick={() => onChange(option)}>
                {option}
              </button>
            );
          })
        }
      </div>
    </div>
  );
}

export default ShortSelector;