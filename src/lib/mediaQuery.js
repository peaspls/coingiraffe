import { useMediaQuery } from 'react-responsive';
 
const Tiny = ({ children }) => {
  return useMediaQuery({ maxWidth: 500 }) ? children : null;
}

const Small = ({ children }) => {
  return useMediaQuery({ minWidth: 501, maxWidth: 650 }) ? children : null;
}

const SmallOrGreater = ({ children }) => {
  return useMediaQuery({ minWidth: 501 }) ? children : null;
}

const Medium = ({ children }) => {
  return useMediaQuery({ minWidth: 651, maxWidth: 1200 }) ? children : null;
}

const MediumOrGreater = ({ children }) => {
  return useMediaQuery({ minWidth: 651 }) ? children : null;
}

const Large = ({ children }) => {
  return useMediaQuery({ minWidth: 1201 }) ? children : null;
}

export { Tiny, Small, SmallOrGreater, Medium, MediumOrGreater, Large }