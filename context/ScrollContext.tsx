// ScrollContext.tsx
'use client'
import { createContext, useCallback, useEffect, useState } from "react";

type ScrollValue = {
  scrollY: number;
  scrollDirection: 'up' | 'down';
};

export const scrollContext = createContext<ScrollValue>({ scrollY: 0, scrollDirection: 'down' });

export const ScrollObserver = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
    setLastScrollY(currentScrollY);
    setScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <scrollContext.Provider value={{ scrollY, scrollDirection }}>
      {children}
    </scrollContext.Provider>
  );
};
