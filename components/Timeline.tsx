import React from "react";

type timeLineProps = {
  showMore: boolean;
};

export default function Timeline({ showMore }: timeLineProps) {
  return (
    <div className="my-10">
      <div className="flex flex-col gap-10 relative pl-5">
        <span className="absolute border-l-4 -left-1 top-3 bottom-[28%] hidden md:block"></span>
        <div className="flex flex-col gap-4 before:h-3 before:w-3 before:bg-black md:before:inline-flex before:items-center before:hidden before:mt-3 before:rounded-full before:absolute before:-left-2">
          <div className="flex flex-col md:flex-row justify-between md:before:block before:hidden before:w-1 before:top-3 before:bg-black before:h-20 before:absolute before:-left-1">
            <span className=" md:text-3xl text-2xl font-semibold">
              Sr. Graphic Designer
            </span>
            <span className="md:text-3xl text-xl">
              July 2018 - October 2020
            </span>
          </div>
          <span className="md:text-2xl text-lg italic">
            LeanHippo Marketers
          </span>
          <span className="text-sm md:text-lg">
            Here I began as a Junior Designer and was later promoted to Senior
            Graphic Designer. My responsibilities primarily revolved around
            spearheading the creative process, brainstorming and conceptualizing
            innovative ideas for social media designs tailored to our clients,
            predominantly within the restaurant and café industry. Additionally,
            a key aspect of my role involved ensuring timely delivery of all
            design projects, maintaining a high level of efficiency and meeting
            strict deadlines.
          </span>
        </div>

        {/* Rest Expereince */}
        {showMore && (
          <>
            {" "}
            <div className="flex flex-col gap-4 before:h-3 before:w-3 before:bg-black md:before:inline-flex before:items-center before:hidden before:mt-3 before:rounded-full before:absolute before:-left-2">
              <div className="flex flex-col md:flex-row justify-between md:before:block before:hidden before:w-1 before:top-3 before:bg-black before:h-20 before:absolute before:-left-1">
                <span className=" md:text-3xl text-2xl font-semibold">
                  Product Deisgn Specialist
                </span>
                <span className="md:text-3xl text-xl">
                  July 2018 - October 2020
                </span>
              </div>
              <span className="md:text-2xl text-lg italic">Pixelpay Media</span>
              <span className="text-sm md:text-lg">
                Here I began as a Junior Designer and was later promoted to
                Senior Graphic Designer. My responsibilities primarily revolved
                around spearheading the creative process, brainstorming and
                conceptualizing innovative ideas for social media designs
                tailored to our clients, predominantly within the restaurant and
                café industry. Additionally, a key aspect of my role involved
                ensuring timely delivery of all design projects, maintaining a
                high level of efficiency and meeting strict deadlines.
              </span>
            </div>
            <div className="flex flex-col gap-4 before:h-3 before:w-3 before:bg-black md:before:inline-flex before:items-center before:hidden before:mt-3 before:rounded-full before:absolute before:-left-2">
              <div className="flex flex-col md:flex-row justify-between md:before:block before:hidden before:w-1 before:top-3 before:bg-black before:h-20 before:absolute before:-left-1">
                <span className=" md:text-3xl text-2xl font-semibold">
                  Sr. Graphic Designer
                </span>
                <span className="md:text-3xl text-xl">
                  July 2018 - October 2020
                </span>
              </div>
              <span className="md:text-2xl text-lg italic">
                LeanHippo Marketers
              </span>
              <span className="text-sm md:text-lg">
                Here I began as a Junior Designer and was later promoted to
                Senior Graphic Designer. My responsibilities primarily revolved
                around spearheading the creative process, brainstorming and
                conceptualizing innovative ideas for social media designs
                tailored to our clients, predominantly within the restaurant and
                café industry. Additionally, a key aspect of my role involved
                ensuring timely delivery of all design projects, maintaining a
                high level of efficiency and meeting strict deadlines.
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
