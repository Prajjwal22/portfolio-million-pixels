"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

type ImageProps = {
  images: string[];
};

gsap.registerPlugin(useGSAP);

gsap.registerPlugin(ScrollTrigger);

export default function Carousel({ images }: ImageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("scrolltrigger refresh!");
    }, 1000);
  }, []);
  useGSAP(
    () => {
      const { current: children } = scrollRef;
      const cards = gsap.utils.toArray(children) as HTMLElement[];
      cards.forEach((card) => {
        gsap.to(card, {
          x: -150,
          ease: "power1.inOut",
          scrollTrigger: {
            // pin: true,
            // markers: true,
            // pinType: "fixed",
            trigger: card,
            start: "bottom bottom ",
            end: "top top  ",
            scrub: 1,
            snap: {
              snapTo: "labels", // snap to the closest label in the timeline
              duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
              delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
              ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
            },
          },
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <div className="overflow-hidden image-carousel">
      <div
        ref={scrollRef}
        className="flex items-center gap-2  portfolio-images "
      >
        {images.map((image, idx) => (
          <Image
            id="portfolio-images"
            key={idx}
            src={image}
            alt="new image"
            width={500}
            height={500}
            className={`port-img  object-cover rounded-lg`}
          />
        ))}{" "}
      </div>
    </div>
  );
}
