import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function Footer() {
  return (
    <section className="bg-primary md:bg-secondary w-screen flex p-2 z-10 md:text-primary text-secondary">
      <div className="my-12 max-w-5xl m-auto flex gap-8 flex-col items-center justify-center">
        <Image
          className="md:max-w-60 max-w-36 rounded-full"
          src="/khandelwal.png"
          alt="Vishal"
          width={500}
          height={500}
        />
        <span className="font-semibold text-2xl md:text-3xl">
          VISHAL KHANDELWAL
        </span>
        <span className="md:text-lg font-medium">Digital Designer</span>
        <span className="md:text-lg font-medium">vishal1993kh1@gmail.com</span>
        <div className="flex gap-5">
          <Button icon="/download.png" title="Download CV" variant="outline" />
          <Button icon="/download.png" title="Download Portfolio" variant="outline" />
        </div>
        <div className="text-sm md:text-lg flex gap-7">
          <span>Behance</span> |<span>Linkedin</span>|<span>Instagram</span>
        </div>
      </div>
    </section>
  );
}
