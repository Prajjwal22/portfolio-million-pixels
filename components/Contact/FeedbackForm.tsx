"use client";

import React, { useState } from "react";

import Button from "../Button";
import Image from "next/image";
import MuiInput from "./MuiInput";

const ratings = [
  { rating: 1, expression: "1.png" },
  { rating: 2, expression: "2.png" },
  { rating: 3, expression: "3.png" },
  { rating: 4, expression: "4.png" },
  { rating: 5, expression: "5.png" },
];

export default function FeedbackForm() {
  const expressionsClass = (i: number) => {
    const classes = [
      "bg-blue-400",
      "bg-yellow-400",
      "bg-green-400",
      "bg-red-400",
      "bg-purple-400",
      "bg-pink-400",
    ];

    return classes[i] || classes[5];
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
    <section className="font-poppins bg-secondary text-primary z-10 relative  overflow-hidden p-2 ">
      <div className="flex flex-col m-auto max-w-5xl bg-white rounded-xl p-8">
        <span className="md:text-2xl font-bold text-center mb-10">
          Share Your Experience{" "}
        </span>

        <div className="flex gap-10 items-center justify-center flex-wrap mb-10">
          {ratings.map((rate, i) => (
            <Image
              key={i}
              src={`/expressions/${rate.expression}`}
              alt="tatings"
              width={70}
              height={70}
              className={`hover:scale-125 max-w-16 md:w-full hover:${expressionsClass(
                i
              )}`}
            />
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
              inputName="Designation "
              handleOnChange={handleOnChange}
            />
          </div>
          <div className="col-span-3 row-span-3">
            <MuiInput
              value={value.experience}
              inputName="Share Your Experience"
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
