import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="md:h-24 sticky top-0 left-0 right-0 -z-10">
      <nav className="max-w-7xl m-auto flex justify-between items-center p-2 md:p-5">
        <Image
          className="max-w-20"
          src="/logo.png"
          width={200}
          height={100}
          alt="Web Logo"
        />
        <div className="md:flex gap-10 hidden">
          <span>About Me</span> |<span>Pro Skills</span>|<span>Portfolio</span>|
          <span>Contact</span>
        </div>
      </nav>
    </header>
  );
}
