import React from "react";

type Expereince = {
  designation: string;
  company: string;
  isCurrent: boolean;
  duration: string;
  id: number;
};


type timeLineProps = {
  showMore: boolean;
  data: Expereince[]
};

export default function Timeline({ showMore, data }: timeLineProps) {
  return (
    <div className="my-10">
      <div className="flex flex-col gap-10 relative pl-5">
        <span className="absolute border-l-4 -left-1 top-3 bottom-[28%] hidden md:block"></span>

        {data
          .filter((item) => item.isCurrent)
          .map((data) => (
            <div
              className={`flex flex-col gap-4 before:h-3 before:w-3 before:${
                data.isCurrent ? "bg-black" : "bg-mute"
              } md:before:inline-flex before:datas-center before:hidden before:mt-3 before:rounded-full before:absolute before:-left-2`}
            >
              <div
                className={`flex flex-col md:flex-row justify-between md:before:block before:hidden before:w-1 before:top-3 before:${
                  data.isCurrent ? "bg-black" : "bg-mute"
                } before:h-20 before:absolute before:-left-1`}
              >
                <span className=" md:text-3xl text-2xl font-semibold">
                  {data.designation}
                </span>
                <span className="md:text-3xl text-xl">{data.duration}</span>
              </div>
              <span className="md:text-2xl text-lg italic">{data.company}</span>
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
          ))}

        {/* Rest Expereince */}
        {showMore && (
          <>
            {data
              .filter((item) => !item.isCurrent)
              .map((item) => (
                <div key={item.id} className="flex flex-col gap-4 before:h-3 before:w-3 text-mute before:bg-mute md:before:inline-flex before:items-center before:hidden before:mt-3 before:rounded-full before:absolute before:-left-2">
                  <div className="flex flex-col md:flex-row justify-between md:before:block before:hidden before:w-1 before:top-3 before:bg-black before:h-20 before:absolute before:-left-1">
                    <span className=" md:text-3xl text-2xl font-semibold">
                      {item.designation}
                    </span>
                    <span className="md:text-3xl text-xl">{item.duration}</span>
                  </div>
                  <span className="md:text-2xl text-lg italic">
                    {item.company}
                  </span>
                  <span className="text-sm md:text-lg">
                    Here I began as a Junior Designer and was later promoted to
                    Senior Graphic Designer. My responsibilities primarily
                    revolved around spearheading the creative process,
                    brainstorming and conceptualizing innovative ideas for
                    social media designs tailored to our clients, predominantly
                    within the restaurant and café industry. Additionally, a key
                    aspect of my role involved ensuring timely delivery of all
                    design projects, maintaining a high level of efficiency and
                    meeting strict deadlines.
                  </span>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
}
