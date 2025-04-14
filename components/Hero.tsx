"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import TypeWriter from "./TypeWriter";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="font-poppins  md:h-[calc(100dvh-300px)] h-[600px] overflow-hidden md:mt-8 ">
      {/* <Parallax speed={10}> */}
      <div className="fixed left-0 right-0 z-0 top-30 h-screen">
        <div className="max-w-6xl m-auto  flex-col md:flex-row md:items-start items-center justify-between p-2 relative ">
          <div className="flex flex-col gap-5 md:mt-10 md:items-start items-center">
            <h1 className="text-primary uppercase text-3xl md:text-left text-center md:text-6xl font-semibold">
              vishal <br /> khandelwal
            </h1>
            <span className=" text-lg md:text-2xl md:text-left text-center h-10 ">
              <TypeWriter
                strings={["Digital Designer","Creator", "Biker"]}
                typeSpeed={110}
                loop={true}
                backSpeed={70}
                cursorChar="_"
                showCursor={true}
              />
            </span>
            <span className="flex gap-4 ">
              <Link href="https://www.behance.net/">
                {" "}
                <Image
                  className="md:max-w-10 max-w-8"
                  src="/behance.png"
                  alt="Behance"
                  width={400}
                  height={400}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/prajjwalhts/">
                {" "}
                <Image
                  className="md:max-w-10 max-w-8"
                  src="/linkedin.png"
                  alt="Linkedin"
                  width={400}
                  height={400}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/prajjwalhts/">
                {" "}
                <Image
                  className="md:max-w-10 max-w-8"
                  src="/insta.png"
                  alt="Linkedin"
                  width={400}
                  height={400}
                />
              </Link>

              {/* <Link href="https://www.instagram.com/_prajjwal.hts/">
                {" "}
                <Image
                  className="md:max-w-10  max-w-8"
                  src="/instagram.png"
                  alt="Instagram"
                  width={400}
                  height={400}
                />
              </Link> */}
            </span>
            <span className="flex items-center gap-3">
              <Button title="Download CV" variant="outline" />
              <Button title="Download Portfolio" variant="outline" />
            </span>
          </div>
        </div>
      </div>
      <Image
        className="max-w-[400px] fixed top-72 md:top-28  right-32 -z-20 mt-10 md:mt-0 md:max-w-[500px]"
        src="/vishal.png"
        width={1000}
        height={1000}
        alt="prajjwal"  
        priority
      />
      {/* </Parallax> */}
      <Image
        className="absolute md:bottom-36 bottom-14 -z-10 w-full object-contain "
        src="/herowaves.png"
        width={2000}
        height={1000}
        alt="Herwave"
        priority
      />
    </section>
  );
}
