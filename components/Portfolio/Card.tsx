import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="portfolio-card min-w-60 h-full min-h-40 rounded-lg relative group transition-all duration-200 cursor-pointer">
      <Image
        className="w-full h-full cover"
        src="/word1.png"
        alt="my work"
        width={500}
        height={500}
      />
      <span className="absolute top-0 transition-all duration-200 left-0 h-full w-full bg-black opacity-40 z-10 hidden peer-hover:block group-hover:block"></span>

      <div className="flex flex-col gap-5 text-white absolute left-0 top-0 z-50 items-center opacity-0 group-hover:opacity-100 justify-center w-full h-full  transition-all duration-200 ">
        <span className="rounded-full border border-white px-4 py-2">Branding</span>
        <span className="font-bold">Lead Generation Campaign</span>
      </div>
    </div>
  );
}
