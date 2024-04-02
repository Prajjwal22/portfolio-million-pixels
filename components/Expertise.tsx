"use client";
import React, { useRef, useContext } from "react";
import { scrollContext } from "@/contexts/ScrollContext";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0) {
    return 1;
  } else {
    return 0.2;
  }
};

export default function Expertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(scrollContext);

  const numofPages = 6;
  let progress = 0;
  const { current: elContainer } = sectionRef;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numofPages - 0.5, Math.max(0.5, percentY * numofPages));
  }

  return (
    <section ref={sectionRef} className="bg-primary w-full p-2 z-10">
      <div className=" max-w-5xl tracking-tight m-auto flex flex-col justify-center gap-8 text-white mt-16">
        <h2 className="font-bold md:text-3xl text-center md:mb-12">
          Expertise Unleashed
        </h2>
        <div className="text-white uppercase font-bold text-3xl md:text-8xl flex flex-col items-center gap-20 font-bebas">
          <span
            style={{ opacity: opacityForBlock(progress, 0) }}
            className="expertiseText"
          >
            Graphic Design
          </span>
          <span
            style={{ opacity: opacityForBlock(progress, 1) }}
            className="expertiseText"
          >
            Branding
          </span>
          <span
            style={{ opacity: opacityForBlock(progress, 2) }}
            className="expertiseText"
          >
            UI Design
          </span>
          <span
            style={{ opacity: opacityForBlock(progress, 3) }}
            className="expertiseText"
          >
            Motion Graphics
          </span>
          <span
            style={{ opacity: opacityForBlock(progress, 4) }}
            className="expertiseText"
          >
            Video Editing
          </span>
        </div>
      </div>
    </section>
  );
}
