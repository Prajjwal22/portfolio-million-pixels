import React from "react";
import Button from "./Button";

export default function Creator() {
  return (
    <section className="bg-primary w-full p-2 z-10">
      <div className="max-w-6xl m-auto flex flex-col justify-center gap-8 text-white">
        <h2 className="font-bold md:text-3xl text-center md:mb-5">
          Meet the Creator
        </h2>
        <span className="text-xl md:text-2xl font-bold text-left">
          I am Vishal Khandelwal
        </span>
        <p className="text-sm md:text-base">
          Throughout my career, I have always tried to ensure that the passion
          and enthusiasm for my work has shone through. Despite my success as an
          independent designer, I have found that it is through a team that I
          have achieved my greatest potential. I have learnt that having a
          platform to question and develop ideas harnesses greater creativity.
        </p>
        <p className="text-sm md:text-base">
          Although realising creative inspiration doesn&apos;t come without its
          obstacles! Time management and working to tight deadlines are
          important in any industry, but the foundations and biggest challenges
          of design lie in communication. In all my work, I have relished these
          challenges and used them to fuel my ambition and maintain my own high
          standards.
        </p>
        <span className="text-center">
          <Button title="Work With Me" variant="outlined" />
        </span>
      </div>
    </section>
  );
}
