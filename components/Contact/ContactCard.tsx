import Image from "next/image";
import React from "react";

type cardProps = {
  icon: string;
  title?: string;
  info?: string;
  index: number;
};

export default function ContactCard({ icon, title, info, index }: cardProps) {
  return (
    <div
      className={`${
        index === 1 ? "row-span-2" : ""
      } p-10 w-[500px] font-poppins min-h-72  bg-white overflow-hidden h-full hovercard rounded-xl flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors duration-500 hover:after:bg-cover hover:after:bg-[url('../public/blur.png')] hover:after:absolute hover:after:top-[-25%] after:transition-all after:ease-in relative ease-in hover:after:right-0  hover:after:w-full hover:after:h-full`}
    >
      <div className="flex flex-col gap-4 h-full w-full justify-center items-center text-lg">
        <Image
          className=" transition all duration-300 mb-5"
          src={icon}
          width={80}
          height={80}
          alt="title"
        />

        <span className="font-bold">{title}</span>

        <span className="text-center" dangerouslySetInnerHTML={{ __html: info ? info : "" }}></span>
      </div>
    </div>
  );
}
