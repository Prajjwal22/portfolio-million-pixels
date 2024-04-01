'use client'
import { createContext, useCallback, useEffect, useState } from "react";

type ScrollValue = {
  scrollY: number;
};

export const scrollContext = createContext<ScrollValue>({ scrollY: 0 });

export const ScrollObserver = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, {
        passive:true
    });

    return () => {
      document.removeEventListener('scroll', handleScroll,);
    };
  }, [handleScroll]);

  return (
    <scrollContext.Provider value={{ scrollY }}>
      {children}
    </scrollContext.Provider>
  );
};
