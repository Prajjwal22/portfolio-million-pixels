import React from "react";

type buttonProps = {
  title: string;
  variant: string;
};

export default function Button({ title, variant }: buttonProps) {
  return (
    <button
      className={`md:h-16 md:w-52 h-12 w-44 rounded-full ${
        variant === "solid"
          ? "bg-primary text-white"
          : variant === "outlined"
          ? "text-white border-white border b-2"
          : "bg-transparent text-primary border-primary b-2 border"
      }`}
    >
      {title}
    </button>
  );
}
