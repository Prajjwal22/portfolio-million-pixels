import Image from "next/image";
import React from "react";

type buttonProps = {
  title: string;
  variant: string;
  icon?: string;
};

export default function Button({ title, variant, icon }: buttonProps) {
  return (
    <div
      className={`md:h-16 ${icon ? "md:min-w-60 w-46" :"md:min-w-52 w-44"} h-12  flex items-center justify-center cursor-pointer rounded-full ${
        variant === "solid"
          ? "bg-primary text-secondary"
          : variant === "outlined"
          ? "text-secondary border-white border b-2"
          : "bg-transparent text-primary border-primary b-2 border"
      }`}
    >
      <span className="flex items-center">
        {title}
        {icon && (
          <Image
            src={icon}
            width={50}
            height={50}
            className="max-w-7 ml-2"
            alt="donwload"
          />
        )}
      </span>
    </div>
  );
}
