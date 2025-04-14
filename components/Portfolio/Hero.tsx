"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap"; // Make sure to import gsap
import Image from "next/image";
import { useFilter } from "@/context/FilterContext";
import projectsData from "@/data/showcasedata.json";

export default function Hero() {
  const titleRef = useRef<null | any>(null);
  const { selectedCategory, setSelectedCategory } = useFilter();

  // Get unique categories from projectsData
  const categories = ['All', ...Array.from(new Set(projectsData.map(project => project.category)))];

  useEffect(() => {
    // Set initial category if none selected
    if (!selectedCategory) {
      setSelectedCategory('All');
    }

    function generateSpans(selector: any) {
      if (!titleRef.current) return;
      const elements = titleRef.current.querySelectorAll(selector);

      elements.forEach((element: any) => {
        const text = element.textContent.trim();
        const words = text.split(" ");

        let finalHTML = "";

        words.forEach((word: string, index: number) => {
          finalHTML += "<div>";
          for (let i = 0; i < word.length; i++) {
            finalHTML += `<span>${word[i]}</span>`;
          }
          finalHTML += "</div>";

          if (index !== words.length - 1) {
            finalHTML += "<div><span></span></div>";
          }
        });

        element.innerHTML = finalHTML;
      });
    }

    function applyHoverEffect(selector: any) {
      if (!titleRef.current) return;
      const spans = titleRef.current.querySelectorAll(selector);

      spans.forEach((span: any) => {
        span.originalScaleY = 1;
        span.addEventListener("mousemove", handleMouseMove);
      });

      function handleMouseMove(e: any) {
        const hoveredSpan = e.target;
        const rect = hoveredSpan.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const scaleFactor = 0.2;

        const center = rect.width / 2;
        let scale;

        if (mouseX < center) {
          scale = scaleFactor + 1 + (scaleFactor * mouseX) / center;
        } else {
          scale =
            scaleFactor + 1 + (scaleFactor * (rect.width - mouseX)) / center;
        }

        gsap.to(hoveredSpan, {
          scaleY: scale,
          duration: 0.5,
          ease: "power4.out",
        });

        const spansArray = Array.from(spans);
        const hoveredIndex = spansArray.indexOf(hoveredSpan);

        const prevSpan = spansArray[hoveredIndex - 1];
        const nextSpan = spansArray[hoveredIndex + 1];

        if (prevSpan) {
          let distanceFromMouse = Math.abs(rect.left - e.clientX);
          distanceFromMouse = Math.min(distanceFromMouse, center);

          const scalePrev =
            1 + (scaleFactor * (center - distanceFromMouse)) / center;
          gsap.to(prevSpan, {
            scaleY: scalePrev,
            duration: 0.5,
            ease: "power4.out",
          });
        }

        if (nextSpan) {
          let distanceFromMouse = Math.abs(rect.right - e.clientX);
          distanceFromMouse = Math.min(distanceFromMouse, center);

          const scaleNext =
            1 + (scaleFactor * (center - distanceFromMouse)) / center;
          gsap.to(nextSpan, {
            scaleY: scaleNext,
            duration: 0.5,
            ease: "power4.out",
          });
        }
      }

      spans.forEach((span: any) => {
        span.addEventListener("mouseleave", handleMouseLeave);
      });

      function handleMouseLeave() {
        spans.forEach((span: any) => {
          gsap.to(span, {
            scaleY: span.originalScaleY,
            duration: 0.5,
            ease: "power4.out",
          });
        });
      }
    }

    generateSpans(".height-title .hero-title span");
    applyHoverEffect(".height-title .hero-title span");
  }, [selectedCategory, setSelectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="font-poppins md:mb-10 text-secondary md:h-[470px] h-80 relative  overflow-hidden  ">
      <div className="fixed left-0 right-0 z-0 top-30 h-screen">
        <div className="md:h-[calc(470px-50px)]  bg-primary h-72 flex flex-col justify-center items-center px-2">
          <div className="w-full max-w-5xl flex flex-col md:m-auto mt-0 mb-0 items-center justify-center">
            <div
              ref={titleRef}
              id="hero-caption"
              className="content-full-width  parallax-scroll-caption text-align-center height-title"
            >
              <div className="inner">
                <h1 className="hero-title font-bebas uppercase md:text-heroSize text-6xl caption-timeline primary-font-title">
                  <span>Portfolio</span>
                </h1>
              </div>
            </div>
            <span className="md:text-lg text-sm text-center">
              Revolutionizing user engagement with an experience that transcends
              imagination, blending seamless functionality with unparalleled
              creativity.
            </span>
            <div className="flex no-scrollbar  m-auto md:text-base text-xs font-medium  items-start md:justify-center md:gap-4 gap-2 mt-20 w-full overflow-y-hidden portfolio-menu p-4">
              {categories.map((category) => (
                <span
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`cursor-pointer transition-all duration-300 hover:text-primary hover:bg-secondary px-5 py-2 md:py-3 rounded-full ${
                    selectedCategory === category
                      ? "bg-secondary text-primary"
                      : ""
                  }`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Image
          className="absolute w-full rotate-180 object-contain "
          src="/herowaves.png"
          width={2000}
          height={1000}
          alt="Herwave"
          priority
        />
      </div>
    </section>
  );
}
