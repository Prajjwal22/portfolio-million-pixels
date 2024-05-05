import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="portfolio-card min-w-60 h-full min-h-40 rounded-lg relative">
      <Image className="w-full h-full cover" src="/word1.png" alt="my work" width={500} height={500} clas />
      <div  className="flex flex-col gap-5 text-white text-sm absolute z-50 items-center justify-between w-full h-full  ">
        <span className="rounded-full border border-white">Branding</span>
        <span className="font-bol">Lead Generation Campaign</span>
      </div>
      <span className="absolute top-0 left-0 h-full w-full bg-black opacity-40 z-10"></span>
    </div>
  );
}
