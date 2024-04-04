"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppsData from "../data/apps.json";
import AppCard from "./AppCard";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
export default function Skills() {
  const scrollRef = useRef();
  useGSAP(() => {
    const cards = gsap.utils.toArray(scrollRef.current.children);
    console.log(cards)

    cards.forEach((card) => {
      gsap.to(card, {
        x: -1000,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: card,
          start: "bottom bottom",
          end: "top 30%",
          scrub: true,
        },
      });
    });
  }, {});

  return (
    <section className="bg-secondary  w-screen p-2 z-10">
      <div className="max-w-6xl tracking-tight m-auto flex flex-col justify-center gap-8 mt-10 overflow-hidden">
        <h2 className="text-primary font-bold md:text-3xl text-center md:mb-5">
          Talent Showcase
        </h2>

        <div ref={scrollRef} className="flex items-center gap-2">
          {AppsData.map((app) => (
            <div key={app.id} className="inner-card">
              <AppCard app={app} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
