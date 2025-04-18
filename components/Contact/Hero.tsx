"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function generateSpans(selector: string) {
      const elements = titleRef.current?.querySelectorAll(selector);


      elements?.forEach((element) => {
        const text = element.textContent?.trim();
        const words = text?.split(" ");

        let finalHTML = ""; // Empty span at the beginning

        words?.forEach((word, index) => {
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

    function applyHoverEffect(selector: string) {
      const spans = titleRef.current?.querySelectorAll(selector);

      spans?.forEach((span) => {
        const spanElement = span as any;

        spanElement.originalScaleY = 1;
        spanElement.addEventListener("mousemove", handleMouseMove);
      });

      function handleMouseMove(e: MouseEvent) {
        const hoveredSpan = e.target as any;
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

        if (spans) {
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
      }

      spans?.forEach((span) => {
        span.addEventListener("mouseleave", handleMouseLeave);
      });

      function handleMouseLeave() {
        spans?.forEach((span: any) => {
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
    <section className="font-poppins text-secondary h-screen relative  overflow-hidden ">
      <div className="md:h-[calc(100dvh-150px)]  bg-primary h-[600px] flex flex-col items-center">
        <div className="max-w-5xl flex flex-col m-auto items-center justify-center">
          <div
            ref={titleRef}
            id="hero-caption"
            className="content-full-width parallax-scroll-caption text-align-center height-title"
          >
            <div className="inner">
              <h1 className="hero-title font-bebas uppercase text-heroSize caption-timeline primary-font-title">
                <span>LETS CONNECT</span>
              </h1>
            </div>
          </div>
        </div>

        <Image
          className="absolute bottom-0 w-full rotate-180 object-contain "
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
