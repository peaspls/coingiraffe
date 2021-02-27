import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  selector: {
    display: 'flex',
    alignItems: 'center',
    padding: 3,
    border: '1px solid #e4e2e2',
    background: 'whitesmoke',
    borderRadius: 5,
    userSelect: 'none'
  },
  option: {
    fontWeight: 'bold',
    outline: 0,
    border: 'none',
    background: 'transparent',
    padding: 10,
    cursor: 'pointer',
  },
  selected: {
    color: 'white',
    background: 'rgb(240, 133, 19)',
    borderRadius: 5
  }

});

const Toggle = (props) => {
  const cls = useStyles(props);
  const { options, selected, onChange } = props;

  return (
    <div className={cls.selector}>
      {
        options.map(option => {
          return (
            <button key={option} className={`${cls.option} ${selected === option ? cls.selected : ''}`} onClick={() => onChange(option)}>
              {option}
            </button>
          );
        })
      }
    </div>
  );
}

export default Toggle;