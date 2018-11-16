import React from 'react';

import { useNavContext } from '../../context/NavContextProvider';
import { Link as L } from '../ui/components';

export const Link = ({ onClick, children, ...props }) => {
  const { setIsMobNavOpen, isMobileLayout } = useNavContext();
  return (
    <L
      onClick={() => {
        if (isMobileLayout) {
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
