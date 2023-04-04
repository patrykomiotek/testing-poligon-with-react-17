import { useState, useEffect } from 'react';

type Size = {
  x: number;
  y: number;
}

export const useViewport = () => {
  const [size, setSize] = useState<Size>({
    x: window.innerWidth, y: window.innerHeight
  });

  const handleResize = () => {
    setSize({
      x: window.innerWidth, y: window.innerHeight
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, []);

  return size;
}
