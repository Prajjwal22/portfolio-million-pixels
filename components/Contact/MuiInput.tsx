import React, { ChangeEvent } from "react";

type Props = {
  handleOnChange: (name: string, value: string) => void;
  value: string;
  inputName: string;
};

export default function MuiInput({ handleOnChange, value, inputName }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleOnChange(e.target.name, e.target.value);
  };
  return (
    <div className="relative h-full" data-te-input-wrapper-init>
      <input
        name={inputName}
        type="text"
        value={value}
        onChange={(e) => handleChange(e)}
        className="p-5 rounded-xl border h-full border-mute text-primary bg-secondary md:h-full md:min-h-14 peer block w-full  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
        id="exampleInput90"
      />
      <label
        className={`pointer-events-none absolute  text-mute left-3 mb-0 max-w-[90%] origin-[0_0] truncate ${
          value != "message" || value !="experience" ? "top-[32%]" : "top-[15%]"
        } leading-[1.6]  transition-all duration-200 ease-out peer-focus:-translate-y-[1.9rem] peer-focus:scale-[0.9] peer-focus:text-primary peer-focus:bg-white peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                      htmlFor="exampleInput90 ${
                        value
                          ? "-translate-y-[1.9rem] scale-[0.9]  text-primary bg-white"
                          : ""
                      }`}
      >
        {inputName.charAt(0).toUpperCase() + inputName.slice(1)}
      </label>
    </div>
  );
}
