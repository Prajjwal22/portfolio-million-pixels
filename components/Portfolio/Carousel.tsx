"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import React, { useRef } from "react";

type ImageProps = {
  images: string[];
};

gsap.registerPlugin(ScrollTrigger);

export default function Carousel({ images }: ImageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const { current: children } = scrollRef;
      const cards = gsap.utils.toArray(children) as HTMLElement[];
      cards.forEach((card) => {
        gsap.to(card, {
          x: -150,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    },
    { scope: scrollRef }
  );

  return (
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex items-center gap-2  portfolio-images "
      >
        {images.map((image, idx) => (
          <Image
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
