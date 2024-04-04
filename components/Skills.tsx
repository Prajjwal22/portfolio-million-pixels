'use client'

import React, { useEffect, useRef } from "react";
import AppCard from "./AppCard";
import AppsData from "../data/apps.json";


const Skills = () => {
  // const containerRef = useRef(null);
  // const contentRef = useRef(null);

  // // Use useEffect to handle the animation logic
  // useEffect(() => {
  //   const container = containerRef.current;
  //   const content = contentRef.current;

  //   // Clone the content to create a seamless loop
  //   const clonedContent = content.cloneNode(true);
  //   content.appendChild(clonedContent);

  //   // Calculate the duration for the animation based on the width difference
  //   const duration = (content.offsetWidth / container.offsetWidth) * 20; // Adjust 20 according to your preference for the speed

  //   // Define the animation
  //   const marqueeAnimation = () => {
  //     // Animate the content to move to the left
  //     content.style.transition = `transform ${duration}s linear`;
  //     content.style.transform = "translateX(-100%)";

  //     // Restart the animation when it ends
  //     setTimeout(() => {
  //       content.style.transition = "none";
  //       content.style.transform = "translateX(0%)"; // Reset the position
  //       setTimeout(marqueeAnimation, 0); // Call marqueeAnimation again after resetting
  //     }, duration * 1000);
  //   };

  //   // Start the animation
  //   marqueeAnimation();

  //   // Clean up on component unmount
  //   return () => {
  //     clearTimeout();
  //   };
  // }, []);

  return (
    <section className="bg-secondary w-screen p-2 z-10">
      <div
        className="max-w-6xl tracking-tight m-auto flex flex-col justify-center gap-8 mt-10"
        // ref={containerRef}
      >
        <h2 className="text-primary font-bold md:text-3xl text-center md:mb-5">
          Talent Showcase
        </h2>
        <div className="marquee-content" 
        // ref={contentRef}
        >
          {/* Render your AppCard components */}
          {AppsData.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;