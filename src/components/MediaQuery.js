import { useMediaQuery } from 'react-responsive';
 
const TinyMediaQuery = ({ children }) => {
  return useMediaQuery({ maxWidth: 450 }) ? children : null;
}

const SmallMediaQuery = ({ children }) => {
  return useMediaQuery({ minWidth: 451, maxWidth: 750 }) ? children : null;
}

const SmallOrGreaterMediaQuery = ({ children }) => {
  return useMediaQuery({ minWidth: 451 }) ? children : null;
}

const MediumMediaQuery = ({ children }) => {
  return useMediaQuery({ minWidth: 751, maxWidth: 1200 }) ? children : null;
}

const MediumOrGreaterMediaQuery = ({ children }) => {
  return useMediaQuery({ minWidth: 751 }) ? children : null;
}

const LargeMediaQuery = ({ children }) => {
  return useMediaQuery({ minWidth: 1201 }) ? children : null;
}

export { 
  TinyMediaQuery, 
  SmallMediaQuery, 
  SmallOrGreaterMediaQuery, 
  MediumMediaQuery, 
  MediumOrGreaterMediaQuery, 
  LargeMediaQuery 
}