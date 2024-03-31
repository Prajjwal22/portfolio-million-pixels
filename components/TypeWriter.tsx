"use client";

import React from "react";
import { ReactTyped } from "react-typed";

type typingProps = {
  strings: string[];
  typeSpeed: number;
  loop: boolean;
  backSpeed: number;
  cursorChar: string;
  showCursor: boolean;
};

export default function TypeWriter({
  strings,
  typeSpeed,
  loop,
  backSpeed,
  cursorChar,
  showCursor
}: typingProps) {
  return (
    <>
      <ReactTyped
        strings={[...strings]}
        typeSpeed={typeSpeed}
        loop={loop}
        backSpeed={backSpeed}
        cursorChar={cursorChar}
        showCursor={showCursor}
      />
    </>
  );
}
