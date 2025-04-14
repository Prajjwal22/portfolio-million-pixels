"use client";

import React, { ChangeEvent, useState } from "react";
import ContactCard from "./ContactCard";
import ContactDetails from "../../data/contact.json";
import Button from "../Button";
import MuiInput from "./MuiInput";

export default function ContactForm() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleOnChange = (name: string, value: string) => {
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section
      id="contactform"
      className="font-poppins bg-secondary text-primary z-10 relative  overflow-hidden p-2 "
    >
      <div className="flex flex-col m-auto max-w-5xl bg-white rounded-xl p-8">
        <span className="md:text-2xl font-bold text-center mb-10">
          Send me a message{" "}
        </span>
        <form className="grid grid-cols-2 gap-5">
          <MuiInput
            value={value.name}
            inputName="name"
            handleOnChange={handleOnChange}
          />
          <MuiInput
            value={value.email}
            inputName="email"
            handleOnChange={handleOnChange}
          />
          <MuiInput
            value={value.contact}
            inputName="contact"
            handleOnChange={handleOnChange}
          />
          <MuiInput
            value={value.subject}
            inputName="subject"
            handleOnChange={handleOnChange}
          />
          <div className="col-span-2 row-span-2 h-36">
            <MuiInput
              value={value.message}
              inputName="message"
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
