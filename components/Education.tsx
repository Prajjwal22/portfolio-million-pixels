type Education = {
  standard: string;
  id: number;
  institution: string;
  year: string;
};

type EducationeProps = {
  showEdu: boolean;
  educationData: Education[];
};

export default function Education({
  showEdu,
  educationData,
}: EducationeProps) {
  return (
    <div className="my-10">
      <div className="flex flex-col gap-10 relative pl-5">
        <span className="absolute border-l-4 -left-1 top-3 bottom-[14%] hidden md:block"></span>

        <div
          className={`flex flex-col gap-4 before:h-3 before:w-3 before:${"bg-black"} md:before:inline-flex before:datas-center before:hidden before:mt-3 before:rounded-full before:absolute before:-left-2`}
        >
          <div
            className={`flex flex-col md:flex-row justify-between md:before:block before:hidden before:w-1 before:top-3 before:${"bg-black"} before:h-20 before:absolute before:-left-1`}
          >
            <span className=" md:text-3xl text-2xl font-semibold">
              {educationData[0].standard}
            </span>
            <span className="md:text-3xl text-xl">{educationData[0].year}</span>
          </div>
          <span className="md:text-2xl text-lg italic">
            {educationData[0].institution}
          </span>
        </div>

        {/* Rest Expereince */}
        {showEdu && (
          <>
            {educationData.slice(1).map((item) => (
              <div key={item.id} className="flex flex-col gap-4 before:h-3 before:w-3 text-mute before:bg-mute md:before:inline-flex before:items-center before:hidden before:mt-3 before:rounded-full before:absolute before:-left-2">
                <div className="flex flex-col md:flex-row justify-between md:before:block before:hidden before:w-1 before:top-3 before:bg-black before:h-20 before:absolute before:-left-1">
                  <span className=" md:text-3xl text-2xl font-semibold">
                    {item.standard}
                  </span>
                  <span className="md:text-3xl text-xl">{item.year}</span>
                </div>
                <span className="md:text-2xl text-lg italic">
                  {item.institution}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
