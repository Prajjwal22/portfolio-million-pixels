// Header.tsx
"use client";

import { scrollContext } from "@/context/ScrollContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

export default function Header() {
  const pathName = usePathname();
  const { scrollY, scrollDirection } = useContext(scrollContext);


  return (
    <header
      className={`font-poppins md:h-24 sticky left-0 right-0 ${scrollY < 650? "top-0 z-0" : scrollDirection === "up" ? "top-0 z-[9999] shadow" : " -top-24 z-0"} ${
        pathName !== "/" ? "bg-primary text-secondary" : "bg-secondary text-primary  "
      } transition-all duration-500`}
    >
      <nav className="max-w-6xl m-auto flex justify-between items-center p-2 md:p-5">
        <Image
          className="max-w-20"
          src="/logo.png"
          width={200}
          height={100}
          alt="Web Logo"
        />
        <div className="md:flex text-sm gap-10 hidden">
          <Link href="/#about">About Me</Link> |
          <span>
            <Link href="/#expertise">Pro Skills</Link>
          </span>
          |
          <span>
            <Link href="/portfolio">Portfolio</Link>
          </span>
          |
          <span>
            <Link href="/contact">Contact</Link>
          </span>
        </div>
      </nav>
    </header>
  );
}
