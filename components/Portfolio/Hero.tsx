import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="font-poppins text-secondary h-screen relative  overflow-hidden ">
      <div className="md:h-[calc(100dvh-150px)]  bg-primary h-[600px] flex flex-col items-center">
        <div className="max-w-5xl flex flex-col m-auto items-center justify-center">
          <h2 className="font-bebas font-semibold text-[180px] tracking-wide -mt-16	">
            POR<span className="text-[280px]">T</span>FOLIO
          </h2>
          <span className="text-2xl -mt-20 text-center">
            Revolutionizing user engagement with an experience that transcends
            imagination, blending seamless functionality with unparalleled
            creativity.
          </span>
        </div>
        <div className="flex m-auto text-xl font-medium items-center gap-12">
          <span className="bg-secondary text-primary px-10 py-3 rounded-full">
            All
          </span>
          <span>Graphic Design</span>
          <span>Branding</span>
          <span>UI Design</span>
          <span>Motion Graphics</span>
        </div>

        <Image
          className="absolute bottom-0 w-full rotate-180 object-contain "
          src="/herowaves.png"
          width={2000}
          height={1000}
          alt="Herwave"
          priority
        />
      </div>
    </section>
  );
}
