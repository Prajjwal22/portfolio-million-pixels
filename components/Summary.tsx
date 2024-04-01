import React from "react";

export default function Summary() {
  return (
    <section className="bg-white  w-screen p-2">
      <div className=" max-w-5xl tracking-tight m-auto flex flex-col justify-center gap-8 mt-16">
        <h2 className="   text-primary font-bold md:text-3xl text-center md:mb-5">
          Professional Journey
        </h2>
        <div>
          <span className="md:h-16 flex items-center justify-center md:w-52 h-12 w-44 rounded-full bg-primary text-white">
            Experience
          </span>
          <div>Sr. Graphic Designer</div>
        </div>
        <div>
          <span className="md:h-16 flex items-center justify-center md:w-52 h-12 w-44 rounded-full bg-primary text-white">
            Education
          </span>
        </div>
      </div>
    </section>
  );
}
