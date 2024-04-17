import React from "react";
import ContactCard from "./ContactCard";
import ContactDetails from "../../data/contact.json";
import Button from "../Button";

export default function Feedback() {
  return (
    <section className="font-poppins bg-secondary text-primary z-10 relative  overflow-hidden p-2 ">
      <div className="flex flex-col m-auto max-w-5xl bg-white rounded-xl p-8">
        <span className="text-2xl font-bold text-center mb-10">Send me a message </span>
        <form className="grid grid-cols-2 gap-5">
          <input type="text" className="p-5 rounded-xl border border-mute text-mute bg-secondary h-[70px]" placeholder="Name"/>
          <input type="text" className="p-5 rounded-xl border border-mute text-mute bg-secondary h-[70px]" placeholder="Email"/>
          <input type="text" className="p-5 rounded-xl border border-mute text-mute bg-secondary h-[70px]" placeholder="Contact No."/>
          <input type="text" className="p-5 rounded-xl border border-mute text-mute bg-secondary h-[70px]" placeholder="Subject"/>
          <input type="text" className="p-5 rounded-xl border border-mute text-mute bg-secondary h-[140px] row-span-2 col-span-2" placeholder="Write Your Message"/>
        </form>
        <div className="mt-10 flex justify-end"><Button title="Send A Message" variant="solid"/></div>
      </div>
    </section>
  );
}
