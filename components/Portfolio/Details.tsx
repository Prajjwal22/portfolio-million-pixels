import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";
import VerticalSlide from "./VerticalSlide";
import Button from "../Button";

export default function Details() {
  const images = [
    "/word1.png",
    "/port.png",
    "/word1.png",
    "/port.png",
    "/word1.png",
    "/port.png",
    "/word1.png",
    "/port.png",
    "/word1.png",

  ];
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
          <div className="flex items-center flex-wrap justify-around">
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
        <div className="w-full py-10">
          <Carousel images={images} />
        </div>
        <div className="max-w-6xl m-auto flex md:flex-row flex-col gap-10 justify-between items-start my-20">
          <Image
            src="/port.png"
            width={900}
            height={900}
            alt="done"
            className="md:w-2/4 h-[500px] object-cover rounded-lg"
          />
          <div className="md:w-2/4 flex flex-col items-start h-full sticky top-0">
            <span className="font-bold text-lg mb-5">Design Approach</span>
            <span className="">
              The campaign utilizes carousel posts to highlight all services and
              sub-services offered by LeanHippo Marketers. Each post features
              visually appealing mockup backgrounds illustrating the services
              and showcasing LeanHippo&apos;s own projects. Content within the
              posts is informative, detailing the range of services provided,
              including website design, consulting, digital marketing, and
              branding.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start max-w-6xl m-auto">
          <span className="font-bold text-lg mb-5">
            Integration of Social Media:
          </span>
          <span>
            Launched across Instagram, LinkedIn, and Facebook, the campaign
            leverages targeted ads to reach the desired audience of new startup
            companies. By utilizing these social media platforms, LeanHippo
            Marketers aims to maximize visibility and engagement, effectively
            reaching potential clients and driving lead generation.
          </span>
          <VerticalSlide images={images} />
          <span className="font-bold text-lg mb-5">Result</span>
          <span>
            Visitors encountering the posts experience a seamless journey
            through the carousel, gaining a clear understanding of LeanHippo
            Marketers&apos; services. The visually appealing mockups provide context
            and demonstrate the agency&apos;s capabilities, encouraging interaction
            and ultimately leading to successful lead generation.
          </span>
          <div className="flex items-center justify-center w-full my-20">
            <Button variant="outlined" title="View More" />
          </div>
        </div>
      </div>
    </section>
  );
}
