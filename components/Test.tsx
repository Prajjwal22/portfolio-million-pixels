import React, { useEffect, useState } from 'react';
import './Test.css'; // Import CSS for styling

const TestTimeLine = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline">
      <div className="line"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
      {/* Add more dots as needed */}
      <div
        className="black-line"
        style={{ height: `${scrollPosition}px` }}
      ></div>
    </div>
  );
};

export default TestTimeLine;
