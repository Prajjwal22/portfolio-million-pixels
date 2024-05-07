import Image from "next/image";
import React from "react";

export default function Details() {
  return (
    <section className="w-full font-poppins z-50 relative">
      <div className="bg-white p-2">
        <div className="max-w-6xl m-auto flex  flex-col pt-10 pb-52">
          <span className="font-bold  text-xl mb-5">
            Lead Generation Campaign
          </span>
          <p className="mb-10">
            This social media campaign was designed for LeanHippo Marketers to
            generate leads and attract new customers. The goal was to showcase
            the range of services offered by LeanHippo Marketers, including
            website design, consulting, digital marketing, and branding,
            targeting new startup companies seeking outsourcing solutions.
          </p>
          <div className="flex items-center justify-around">
            <span className="flex flex-col items-center justify-center gap-2">
              <span className="font-bold text-lg">Project</span>
              <span>LeanHippo Marketers</span>
            </span>
            <span className="flex flex-col items-center justify-center gap-2">
              <span className="font-bold text-lg">Services</span>
              <span>Graphic Design</span>
            </span>
            <span className="flex flex-col items-center justify-center gap-2">
              <span className="font-bold text-lg">Date</span>
              <span>2020</span>
            </span>
            <span className="flex flex-col items-center justify-center gap-2">
              <span className="font-bold text-lg">Link</span>
              <span>Social Media</span>
            </span>
          </div>
        </div>
      </div>
      <div className=" bg-primary p-2 text-secondary">
        <div className=" max-w-6xl m-auto flex flex-col gap-5 -mt-32">
          <Image
            src="/port.png"
            width={900}
            height={900}
            alt="portf image"
            className="w-full h-full mb-10"
          />
          <span className="font-bold text-lg">
            Interesting facts in development
          </span>
          <span className="font-bold">Vision</span>
          <p>
            This social media campaign by LeanHippo Marketers targets new
            startup companies seeking outsourcing solutions. LeanHippo positions
            itself as a comprehensive solution provider, offering expertise in
            website design, consulting, digital marketing, and branding. The
            goal is to attract new customers and generate leads within this
            demographic.
          </p>
        </div>
      </div>
    </section>
  );
}
