import React from 'react';
import { Link as L } from '../ui/components';
import { useNavContext } from '../../context/NavContextProvider';

const Link = ({ children, onClick, ...props }) => {
  const { isMobileLayout, isMobNavOpen, setIsMobNavOpen } = useNavContext();
  return (
    <L
      style={{ marginLeft: '10px', marginRight: '10px' }}
      onClick={() => {
        if (isMobNavOpen && isMobileLayout) {
          setIsMobNavOpen(false);
        }

        if (onClick) {
          onClick();
        }
      }}
      {...props}
    >
      {children}
    </L>
  );
};

export default Link;
