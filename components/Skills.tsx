"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AppsData from "../data/apps.json";
import AppCard from "./AppCard";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
gsap.registerPlugin(useGSAP);

gsap.registerPlugin(ScrollTrigger);
export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef1 = useRef<HTMLDivElement>(null);

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
          x: -250,
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

  useGSAP(
    () => {
      const { current: children } = scrollRef1;
      const cards = gsap.utils.toArray(children) as HTMLElement[];

      cards.forEach((card) => {
        gsap.to(card, {
          x: 250,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: card,
            start: "bottom bottom",
            end: " -30%",
            scrub: true,
          },
        });
      });
    },
    { scope: scrollRef1 }
  );

  return (
    <section className="font-poppins bg-secondary z-10">
      <div className=" tracking-tight m-auto flex flex-col items-center justify-center gap-8 my-10 overflow-hidden">
        <h2 className="text-primary font-bold md:text-3xl text-center md:mb-5">
          Talent Showcase
        </h2>

        <div ref={scrollRef} className="flex items-center gap-2">
          {[...AppsData, ...AppsData].map((app) => (
            <div key={app.id} className="inner-card">
              <AppCard app={app} />
            </div>
          ))}
        </div>
        <div
          ref={scrollRef1}
          className="flex w-screen flex-row-reverse items-center gap-2 mb-10"
        >
          {[...AppsData, ...AppsData].map((app) => (
            <div key={app.id} className="inner-card">
              <AppCard app={app} />
            </div>
          ))}
        </div>
        <span className="hidden md:block">
          <Button
            title="Download My Resume"
            icon="/download.png"
            variant="outline"
          />
        </span>
        <span className="md:hidden">
          {" "}
          <Button title="Download Resume" variant="outline" />
        </span>
      </div>
    </section>
  );
}
