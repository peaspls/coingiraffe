import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  switch: {
    boxSizing: 'border-box',
    '& > input': {
      display: 'none'
    },
    '& > input:checked+div': {
      background: props => props.onBackgroundColor,
    },
    '& > input:checked+div:before': {
      content: '""',
      position: 'absolute',
      left: 26
    },
    '& > div': {
      width: 30,
      height: 25,
      background: props => props.offBackgroundColor,
      zIndex: 0,
      cursor: 'pointer',
      position: 'relative',
      borderRadius: 50,
      lineHeight: '40px',
      padding: '0 10px',
      transition: 'all 250ms',
      '&:before': {
        content: '""',
        display: 'inline-block',
        position: 'absolute',
        left: 1,
        top: 1,
        height: 23,
        width: 23,
        background:  props => props.nobColor,
        borderRadius: '50%',
        transition: 'all 200ms'
      }
    },
  },
  left: {
    color:  props => props.offTextColor,
    position: 'absolute',
    right: 4,
    fontSize: 10,
    top: -7
  },
  right: {
    color:  props => props.onTextColor,
    position: 'absolute',
    left: 4,
    fontSize: 10,
    top: -7
  }
});

const Toggle = (props) => {
  const cls = useStyles(props);
  const { offText, onText, className, onChange, isOn } = props;

  return (
    <div className={className}>
      <label className={cls.switch}>
        <input type="checkbox" defaultChecked={isOn} onChange={onChange}/>
        <div className="">
          <span className={cls.left}>{offText}</span>
          <span className={cls.right}>{onText}</span>
        </div>
      </label>
    </div>
  );
}

export default Toggle;