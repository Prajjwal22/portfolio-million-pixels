import React from "react";
import EmblaCarousel from "./Carousel";
import ReviewsData from "../data/testinomials.json";
import Button from "./Button";
import Link from "next/link";

export default function Testinomials() {
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section className="font-poppins bg-primary w-full p-2 z-10 hidden md:block">
      <div className="max-w-6xl m-auto flex flex-col justify-center items-center gap-8 text-secondary my-12">
        <h2 className="font-bold md:text-3xl text-center md:mb-5">
          Voices of Recommendation
        </h2>
        <div>
          <EmblaCarousel slides={ReviewsData} />
        </div>
        <Link href="/contact/#feedback">
          {" "}
          <Button title="Share Your Experience" variant="outlined" />
        </Link>
      </div>
    </section>
  );
}
