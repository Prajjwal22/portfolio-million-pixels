"use client";

import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Button from "./Button";

export default function Showcase() {
  useEffect(() => {
    let stickySections = [
      ...document.querySelectorAll<HTMLElement>(".innerCard"),
    ];
    function animate() {
      console.log("prajjwal");
      for (let i = 0; i < stickySections.length; i++) {
        let { top } = stickySections[
          i
        ].parentElement?.getBoundingClientRect() || { top: 0 };
        let transTop = top > 0 ? 0 : top * -1;
        if (transTop >= 1000) transTop = 1000;

        if (top <= 0 && i !== stickySections.length - 1) {
          stickySections[i].style.transform = `scale3d(${
            1 - transTop * 0.001
          }, ${1 - transTop * 0.001},1)`;
          stickySections[i].style.filter = `blur(${0 + transTop * 0.02}px)`;
          stickySections[i].style.opacity = `${1 - transTop * 0.0015}`;
        }
      }
    }

    window.addEventListener("scroll", animate);
    return () => {
      window.removeEventListener("scroll", animate);
    };
  }, []);

  return (
    <section id="portfolio" className="font-poppins bg-primary w-full p-2 z-10">
      <div className=" max-w-7xl tracking-tight m-auto flex flex-col justify-center gap-8 my-16">
        <h2 className="   text-secondary font-bold md:text-3xl text-center md:mb-5">
          Creative Showcase
        </h2>
        <div className="h-[500vh] bg-primary">
          <div className="relative h-[200vh] w-full sectionDiv">
            <div className="innerCard sticky w-full h-screen top-0 p-3 md:p-10 will-change-filter">
              <ProjectCard title="Graphic Design" image="/work.png" />
            </div>
          </div>
          <div className="relative h-[200vh] w-full sectionDiv">
            <div className="innerCard sticky w-full h-screen top-0 md:p-10 will-change-filter">
              <ProjectCard title="Motion Designing" image="/work2.png" />
            </div>
          </div>
          <div className="relative h-[200vh] w-full sectionDiv">
            <div className="innerCard sticky w-full h-screen top-0 md:p-10 will-change-filter">
              <ProjectCard title="UI Work" image="/work2.png" />
            </div>
          </div>
          <div className="relative h-[200vh] w-full sectionDiv">
            <div className="innerCard sticky w-full h-screen top-0 md:p-10 will-change-filter">
              <ProjectCard title="Character Designing" image="/work2.png" />
            </div>
          </div>
        </div>
        <div className="m-auto">
          <Button title="Download Porfolio " variant="outlined" />
        </div>
      </div>
    </section>
  );
}
