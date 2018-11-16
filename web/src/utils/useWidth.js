import { useState, useEffect } from 'react';

export default () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(
    () => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    [width],
  );

  return width;
};
