import { useMediaQuery } from 'react-responsive';
 
const Tiny = ({ children }) => {
  return useMediaQuery({ maxWidth: 540 }) ? children : null;
}

const Small = ({ children }) => {
  return useMediaQuery({ minWidth: 541, maxWidth: 800 }) ? children : null;
}

const SmallOrGreater = ({ children }) => {
  return useMediaQuery({ minWidth: 541 }) ? children : null;
}

const Medium = ({ children }) => {
  return useMediaQuery({ minWidth: 801, maxWidth: 1200 }) ? children : null;
}

const MediumOrGreater = ({ children }) => {
  return useMediaQuery({ minWidth: 801 }) ? children : null;
}

const Large = ({ children }) => {
  return useMediaQuery({ minWidth: 1201 }) ? children : null;
}

export { Tiny, Small, SmallOrGreater, Medium, MediumOrGreater, Large }