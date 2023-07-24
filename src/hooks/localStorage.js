import { useState } from 'react';

const getFromLocalStorage = (key, defaultValue) => {
  const value = window.localStorage.getItem(key);
  return value !== null ? JSON.parse(value) : defaultValue;
};

const saveToLocalStorage = async (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const useLocalStorage = ({ key, defaultValue }) => {
  const [value, setValue] = useState(getFromLocalStorage(key, defaultValue));

  const set = (value) => {
    setValue(value);
    saveToLocalStorage(key, value);
  };

  return [value, set];
};

export { useLocalStorage };
