import { useMediaQuery } from 'react-responsive';
 
const TinyMedia = ({ children }) => {
  return useMediaQuery({ maxWidth: 450 }) ? children : null;
}

const SmallMedia = ({ children }) => {
  return useMediaQuery({ minWidth: 451, maxWidth: 750 }) ? children : null;
}

const SmallOrGreaterMedia = ({ children }) => {
  return useMediaQuery({ minWidth: 451 }) ? children : null;
}

const MediumMedia = ({ children }) => {
  return useMediaQuery({ minWidth: 751, maxWidth: 1200 }) ? children : null;
}

const MediumOrGreaterMedia = ({ children }) => {
  return useMediaQuery({ minWidth: 751 }) ? children : null;
}

const LargeMedia = ({ children }) => {
  return useMediaQuery({ minWidth: 1201 }) ? children : null;
}

export { TinyMedia, SmallMedia, SmallOrGreaterMedia, MediumMedia, MediumOrGreaterMedia, LargeMedia }