'use client';

import { useFilter } from "@/context/FilterContext";
import projectsData from "@/data/showcasedata.json";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";

export default function Grid() {
  const { selectedCategory } = useFilter();
  const gridRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!gridRef.current || !mounted) return;

    const cards = gridRef.current.children;
    const timeline = gsap.timeline();

    // Store original positions
    const originalPositions = Array.from(cards).map(card => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      return { x: rect.left, y: rect.top };
    });

    // Random positions for scatter effect
    const randomPositions = Array.from(cards).map(() => ({
      x: Math.random() * window.innerWidth - window.innerWidth/2,
      y: Math.random() * window.innerHeight - window.innerHeight/2,
      rotation: Math.random() * 360 - 180
    }));

    if (!mounted) {
      gsap.set(cards, { opacity: 0, scale: 0.8 });
    }

    timeline
      // First scatter the cards
      .to(cards, {
        opacity: 0.5,
        scale: 0.7,
        x: (i) => randomPositions[i].x,
        y: (i) => randomPositions[i].y,
        rotation: (i) => randomPositions[i].rotation,
        duration: 0.5,
        ease: "power2.inOut",
        stagger: {
          amount: 0.3,
          from: "random"
        }
      })
      // Then bring them back to grid
      .to(cards, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.8)",
        stagger: {
          amount: 0.4,
          from: "random"
        }
      });

    // Cleanup function
    return () => {
      timeline.kill();
    };

  }, [selectedCategory, mounted]);

  return (
    <section className="relative font-poppins  bg-secondary z-50 flex items-center justify-center px-2 pb-5 overflow-hidden">
      <div className="max-w-6xl flex flex-col items-center justify-center">
          <div 
            ref={gridRef} 
            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 portfolio-grid mb-10"
            style={{ minHeight: '400px' }} // Add minimum height to prevent layout shifts
          >
            {filteredProjects.map((item) => (
              <Card
                key={item.id}
             
                {...item}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
