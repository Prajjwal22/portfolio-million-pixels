"use client";

import React, { useEffect, useState } from "react";
import Timeline from "./Timeline";

export default function Summary() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 420) {
      setShowMore(true);
    }
  }, []);
  return (
    <section className="bg-white  w-screen p-2">
      <div className=" max-w-5xl tracking-tight m-auto flex flex-col justify-center gap-8 mt-16">
        <h2 className="   text-primary font-bold md:text-3xl text-center md:mb-5">
          Professional Journey
        </h2>
        <div className="relative">
          <div className="flex justify-between items-center ">
            <span className="absolute md:hidden bottom-0 w-screen -left-2 h-0.5 bg-mute"></span>
            <span className="md:h-16 flex md:text-xl text-sm items-center justify-center md:w-52 h-10 w-28 rounded-full bg-primary text-white">
              Experience
            </span>
            <span
              onClick={() => setShowMore(!showMore)}
              className="text-xs md:hidden"
            >
              Show {showMore ? "Less" : "More"}{" "}
              <span className="md:hidden rotate-90">&gt;</span>
            </span>
          </div>
          <Timeline showMore={showMore} />
        </div>
        <div className="relative">
          <span className="absolute md:hidden bottom-0 w-screen -left-2 h-0.5 bg-mute"></span>

          <span className="md:h-16 flex md:text-xl text-sm items-center justify-center md:w-52 h-10 w-28 rounded-full bg-primary text-white">
            Education
          </span>
          <Timeline showMore={showMore} />
        </div>
      </div>
    </section>
  );
}
