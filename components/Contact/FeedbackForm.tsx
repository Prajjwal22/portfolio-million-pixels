"use client";

import React, { useState } from "react";

import Button from "../Button";
import Image from "next/image";
import MuiInput from "./MuiInput";

const ratings = [
  { rating: 1, expression: "1.webp" },
  { rating: 2, expression: "2.webp" },
  { rating: 3, expression: "3.webp" },
  { rating: 4, expression: "4.webp" },
  { rating: 5, expression: "5.webp" },
];

export default function FeedbackForm() {
  const [selected, setSelected] = useState<number | null>(null);
  const expressionsClass = (i: number) => {
    const classes = [
      "bg-red-400",
      "bg-yellow-400",
      "bg-orange-400",
      "bg-blue-400",
      "bg-green-400",
    ];

    return classes[i] || classes[5];
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const [value, setValue] = useState({
    name: "",
    designation: "",
    file: "",
    experience: "",
  });


  const handleOnChange = (name: string, value: string) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  return (
    <section
      id="feedback"
      className="font-poppins bg-secondary text-primary z-10 relative  overflow-hidden p-2 "
    >
      <div className="flex flex-col m-auto max-w-5xl bg-white rounded-xl p-8">
        <span className="md:text-2xl font-bold text-center mb-10">
          Share Your Experience{" "}
        </span>

        <div className="flex gap-10 items-center justify-center flex-wrap mb-10">
          {ratings.map((rate, i) => (
            <div
              key={i}
              className={`relative hover:scale-125 cursor-pointer ${
                selected === rate.rating ? "scale-125 " : null
              }`}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setSelected(rate.rating)}
            >
              <Image
                src={`/expressions/${rate.expression}`}
                alt="ratings"
                width={70}
                height={70}
                className={`max-w-16 md:w-full   `}
              />
              <span
                className={`absolute w-16 h-16 rounded-full top-0 left-0 opacity-75 ${
                  hoveredIndex === i || selected === rate.rating
                    ? expressionsClass(i)
                    : ""
                }`}
              ></span>
            </div>
          ))}
        </div>
        <form className="grid md:grid-cols-3 md:grid-rows-3 gap-5 w-full">
          <div className="col-span-2">
            <MuiInput
              value={value.name}
              inputName="name"
              handleOnChange={handleOnChange}
            />
          </div>

          <div className="p-5 rounded-xl border border-mute text-mute bg-secondary  row-span-2 w-full">
            <label
              htmlFor="drop-file"
              className="flex items-center justify-center h-full w-full gap-3 text-sm text-primary"
            >
              <Image
                src="/expressions/upload.png"
                width={70}
                height={70}
                alt="ipload"
              />
              <span className="flex flex-col">
                <strong>Browse Files</strong>
                <span>Drag and Drop Files Here</span>
              </span>
            </label>
            <input
              id="drop-file"
              name={value.file}
              type="file"
              className=" hidden"
            />
          </div>
          <div className="col-span-2">
            <MuiInput
              value={value.designation}
              inputName="designation"
              handleOnChange={handleOnChange}
            />
          </div>
          <div className="col-span-3 row-span-4">
            <MuiInput
              value={value.experience}
              inputName="experience"
              handleOnChange={handleOnChange}
            />
          </div>
        </form>
        <div className="mt-10 flex justify-end">
          <Button title="Send A Message" variant="solid" />
        </div>
      </div>
    </section>
  );
}
