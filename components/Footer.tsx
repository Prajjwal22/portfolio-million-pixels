import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-primary font-poppins md:bg-secondary flex p-2 z-10 relative md:text-primary text-secondary">
      <div className="my-12 max-w-5xl m-auto flex gap-5 flex-col items-center justify-center">
        <Image
          className="md:max-w-60 max-w-36 rounded-full"
          src="/khandelwal.png"
          alt="prajjwal"
          width={500}
          height={500}
        />
        <span className="font-semibold text-2xl md:text-3xl">
          Vishal Khandelwal
        </span>
        <span className="md:text-lg font-medium">Digital Designer & Developer</span>
        <span className="md:text-lg font-medium">prajjwalhts@gmail.com</span>
        <div className="md:flex gap-5 hidden">
          <Button icon="/download.png" title="Download CV" variant="outline" />
          <Button
            icon="/download.png"
            title="Download Portfolio"
            variant="outline"
          />
        </div>
        <div className="flex gap-5 md:hidden">
          <Button title="Download CV" variant="outlined" />
          <Button title="Download Portfolio" variant="outlined" />
        </div>
        <div className="text-sm md:text-lg flex gap-7">
          <Link href="#">
            {" "}
            <span>Behance</span>
          </Link>{" "}
          |{" "}
          <Link href="https://www.linkedin.com/in/prajjwalhts/">
            <span>Linkedin</span>
          </Link>
          |{" "}
          <Link href="https://www.instagram.com/_prajjwal.hts/">
            <span>Instagram</span>
          </Link>
        </div>
      <span className="text-muted text-xs">Crafted with ❤️ by Prajjwal</span>

      </div>
    </section>
  );
}
