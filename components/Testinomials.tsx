import React from "react";
import EmblaCarousel from "./Carousel";
import ReviewsData from "../data/testinomials.json"

export default function Testinomials() {

    const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


  return (
    <section className="bg-primary w-full p-2 z-10">
      <div className="max-w-6xl m-auto flex flex-col justify-center gap-8 text-secondary my-12">
        <h2 className="font-bold md:text-3xl text-center md:mb-5">
          Voices of Recommendation
        </h2>
        <div>

            <EmblaCarousel slides={ReviewsData}/>
        </div>
      </div>
    </section>
  );
}
