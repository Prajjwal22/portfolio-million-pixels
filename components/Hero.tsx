import Image from "next/image";
import React from "react";
import Button from "./Button";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  return (
    <section className="relative md:h-[calc(100dvh-150px)] h-[calc(100dvh-300px)] overflow-hidden md:mt-14 ">
      <div className="max-w-5xl m-auto flex flex-col md:flex-row md:items-start items-center justify-between p-2">
        <div className="flex flex-col gap-5 md:mt-10 md:items-start items-center">
          <h1 className="text-primary uppercase text-4xl md:text-left text-center md:text-7xl font-semibold">
            Vishal <br /> Khandelwal
          </h1>
          <span className=" text-xl md:text-3xl md:text-left text-center h-10 ">
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
            <Image
              className="md:max-w-12 max-w-8"
              src="/behance.png"
              alt="Behance"
              width={400}
              height={400}
            />
            <Image
              className="md:max-w-12 max-w-8"
              src="/linkedin.png"
              alt="Linkedin"
              width={400}
              height={400}
            />

            <Image
              className="md:max-w-12 max-w-8"
              src="/instagram.png"
              alt="Instagram"
              width={400}
              height={400}
            />
          </span>
          <span className="flex items-center gap-3">
            <Button title="Download CV" variant="solid" />
            <Button title="Download Portfolio" variant="outline" />
          </span>
        </div>
        <Image
          className="max-w-[400px] mt-10 md:mt-0 md:max-w-[600px]"
          src="/vishal.png"
          width={1000}
          height={1000}
          alt="Vishal"
          priority
        />
      </div>
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
