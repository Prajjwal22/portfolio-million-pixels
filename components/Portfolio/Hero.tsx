"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap"; // Make sure to import gsap
import Image from "next/image";

export default function Info() {
  const titleRef = useRef<null|any>(null);

  useEffect(() => {
    function generateSpans(selector:any) {
      const elements = titleRef.current.querySelectorAll(selector);

      console.log(elements);

      elements.forEach((element:any) => {
        const text = element.textContent.trim();
        const words = text.split(" ");

        let finalHTML = ""; // Empty span at the beginning

        words.forEach((word:string, index:number) => {
          finalHTML += "<div>"; // Open a div for each word
          for (let i = 0; i < word.length; i++) {
            finalHTML += `<span>${word[i]}</span>`; // Wrap each letter in a span
          }
          finalHTML += "</div>"; // Close the div for each word

          if (index !== words.length - 1) {
            finalHTML += "<div><span></span></div>"; // Empty span and a div between words
          }
        });

        finalHTML += ""; // Empty span at the end

        element.innerHTML = finalHTML;
      });
    }

    function applyHoverEffect(selector:any) {
      const spans = titleRef.current.querySelectorAll(selector);

      spans.forEach((span:any) => {
        span.originalScaleY = 1;
        span.addEventListener("mousemove", handleMouseMove);
      });

      function handleMouseMove(e:any) {
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

      spans.forEach((span:any) => {
        span.addEventListener("mouseleave", handleMouseLeave);
      });

      function handleMouseLeave() {
        spans.forEach((span:any) => {
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
  }, []); // Empty dependency array ensures this effect only runs once after initial render

  return (
    <section className="font-poppins md:mb-10 text-secondary md:h-[470px] h-80 relative  overflow-hidden  ">
      <div className="fixed left-0 right-0 z-0 top-30 h-screen">
        <div className="md:h-[calc(470px-50px)]  bg-primary h-72 flex flex-col justify-center items-center px-2">
          <div className="max-w-5xl flex flex-col md:m-auto mt-0 mb-0 items-center justify-center">
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
            <div className="flex m-auto text-lg font-medium items-center gap-12 mt-20">
              <span className="bg-secondary text-primary px-10 py-3 rounded-full">
                All
              </span>
              <span>Graphic Design</span>
              <span>Branding</span>
              <span>UI Design</span>
              <span>Motion Graphics</span>
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
