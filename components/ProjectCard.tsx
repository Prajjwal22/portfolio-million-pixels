import Image from "next/image";
import React from "react";

type projectCardProps = {
  title: string;
  image: string;
};
export default function ProjectCard({ image, title }: projectCardProps) {
  return (
    <div className="w-full h-full rounded-lg relative">
      <Image
        className="h-full w-full object-cover rounded-lg"
        src={image}
        width={2000}
        height={2000}
        alt="work"
      />
      <span className="absolute text-white md:text-4xl text-2xl m-auto font-bold bottom-0 md:right-0 p-10 inline-flex items-center gap-3">
        {title}{" "}
        <Image
          className="max-w-12"
          src="/arrow.png"
          width={100}
          height={100}
          alt="arrow"
        />
      </span>
    </div>
  );
}
