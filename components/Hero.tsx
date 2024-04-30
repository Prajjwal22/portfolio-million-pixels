"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import TypeWriter from "./TypeWriter";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="font-poppins relative md:h-[calc(100dvh-330px)] h-[600px] overflow-hidden md:mt-8 ">
      {/* <Parallax speed={10}> */}
      <div className="fixed left-0 right-0 z-0 top-30 h-screen">
        <div className="max-w-6xl m-auto flex flex-col md:flex-row md:items-start items-center justify-between p-2 ">
          <div className="flex flex-col gap-5 md:mt-10 md:items-start items-center">
            <h1 className="text-primary uppercase text-3xl md:text-left text-center md:text-6xl font-semibold">
              Vishal <br /> Khandelwal
            </h1>
            <span className=" text-lg md:text-2xl md:text-left text-center h-10 ">
              <TypeWriter
                strings={["Digital Designer", "UI/UX Enthusiast", "Foodie "]}
                typeSpeed={110}
                loop={true}
                backSpeed={70}
                cursorChar="_"
                showCursor={true}
              />
            </span>
            <span className="flex gap-4 ">
             <Link href="http://www.instagram.com/vishal_khandelwal93/"> <Image
                className="md:max-w-10 max-w-8"
                src="/behance.png"
                alt="Behance"
                width={400}
                height={400}
              /></Link>
              <Link href="http://www.linkedin.com/in/vishal-khandelwal-150216124/"> <Image
                className="md:max-w-10 max-w-8"
                src="/linkedin.png"
                alt="Linkedin"
                width={400}
                height={400}
              /></Link>

<Link href="https://www.behance.net/vishal1993ce3e?log_shim_removal=1">  <Image
                className="md:max-w-10 max-w-8"
                src="/instagram.png"
                alt="Instagram"
                width={400}
                height={400}
              /></Link>
            </span>
            <span className="flex items-center gap-3">
              <Button title="Download CV" variant="outline" />
              <Button title="Download Portfolio" variant="outline" />
            </span>
          </div>
          <Image
            className="max-w-[400px] mt-10 md:mt-0 md:max-w-[500px]"
            src="/vishal.png"
            width={1000}
            height={1000}
            alt="Vishal"
            priority
          />
        </div>
      </div>
      {/* </Parallax> */}
      <Image
        className="absolute bottom-0 w-full object-contain "
        src="/herowaves.png"
        width={2000}
        height={1000}
        alt="Herwave"
        priority
      />
    </section>
  );
}
