"use client";

import { scrollContext } from "@/contexts/ScrollContext";
import React, { useContext, useEffect, useRef, useState } from "react";

type Expereince = {
  designation: string;
  company: string;
  isCurrent: boolean;
  duration: string;
  id: number;
};

type timeLineProps = {
  showMore: boolean;
  data: Expereince[];
};

export default function Timeline({ showMore, data }: timeLineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useContext(scrollContext);
  const [visibleHeight, setVisibleHeight] = useState(0); // Initial height
  const [turnOn, setTurnOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { offsetTop, clientHeight } = sectionRef.current;
        const screenH = window.innerHeight;
        const scrollPosition = scrollY + screenH;

        // Calculate the visibility of the section
        if (scrollPosition > offsetTop || scrollY < offsetTop + clientHeight) {
          const visiblePart = scrollPosition - offsetTop - 7000;
          const calcHeight = visiblePart < 503 ? visiblePart : 503;
          setVisibleHeight(calcHeight);
          if (visiblePart > 203) {
            setTurnOn(true);
          } else {
            setTurnOn(false);
          }
        } else {
          setVisibleHeight(0); // Reset to initial height if not visible
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div className="my-10" ref={sectionRef}>
      <div className="flex flex-col gap-10 relative pl-5">
        <span className="absolute border-l-4 -left-1 top-3 bg-black bottom-[28%] hidden md:block"></span>
        <span
          style={{ height: visibleHeight }}
          className={`absolute -left-1 top-3 bg-black w-1 hidden md:block`}
        ></span>

        {data
          .filter((item) => item.isCurrent)
          .map((data) => (
            <div
              key={data.id}
              className={`flex flex-col gap-4 before:h-3 before:w-3 before:${
                data.isCurrent ? "bg-black" : "bg-mute"
              } md:before:inline-flex before:datas-center before:hidden before:mt-3 before:rounded-full before:absolute before:-left-2`}
            >
              <div
                className={`flex flex-col md:flex-row justify-between md:before:block before:hidden before:w-1 before:top-3 before:${
                  data.isCurrent ? "bg-black" : "bg-mute"
                } before:h-[${visibleHeight}] before:absolute before:-left-1`}
              >
                <span className=" md:text-3xl text-2xl font-semibold">
                  {data.designation}
                </span>
                <span className="md:text-3xl text-xl">{data.duration}</span>
              </div>
              <span className="md:text-2xl text-lg italic">{data.company}</span>
              <span className="text-sm md:text-lg">
                Here I began as a Junior Designer and was later promoted to
                Senior Graphic Designer. My responsibilities primarily revolved
                around spearheading the creative process, brainstorming and
                conceptualizing innovative ideas for social media designs
                tailored to our clients, predominantly within the restaurant and
                café industry. Additionally, a key aspect of my role involved
                ensuring timely delivery of all design projects, maintaining a
                high level of efficiency and meeting strict deadlines.
              </span>
            </div>
          ))}

        {/* Rest Expereince */}

        {showMore && (
          <>
            {data
              .filter((item) => !item.isCurrent)
              .map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col gap-4 before:h-3 transition-colors duration-500 before:w-3 ${
                    (visibleHeight > 250 && index === 0) ||
                    visibleHeight === 503
                      ? "text-primary  before:bg-black"
                      : "text-mute  before:bg-mute"
                  } md:before:inline-flex before:items-center before:hidden before:mt-3 before:rounded-full before:absolute before:-left-2`}
                >
                  <div className="flex flex-col md:flex-row justify-between md:before:block before:hidden before:w-1 before:top-3 before:bg-black before:h-20 before:absolute before:-left-1">
                    <span className=" md:text-3xl text-2xl font-semibold">
                      {item.designation}
                    </span>
                    <span className="md:text-3xl text-xl">{item.duration}</span>
                  </div>
                  <span className="md:text-2xl text-lg italic">
                    {item.company}
                  </span>
                  <span className="text-sm md:text-lg">
                    Here I began as a Junior Designer and was later promoted to
                    Senior Graphic Designer. My responsibilities primarily
                    revolved around spearheading the creative process,
                    brainstorming and conceptualizing innovative ideas for
                    social media designs tailored to our clients, predominantly
                    within the restaurant and café industry. Additionally, a key
                    aspect of my role involved ensuring timely delivery of all
                    design projects, maintaining a high level of efficiency and
                    meeting strict deadlines.
                  </span>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
