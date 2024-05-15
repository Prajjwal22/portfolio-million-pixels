import React from "react";
import ContactCard from "./ContactCard";
import ContactDetails from "../../data/contact.json";

export default function Social() {
  return (
    <section className="font-poppins bg-secondary text-primary z-10 relative  overflow-hidden px-2 ">
      <div className="flex flex-col m-auto max-w-5xl">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 [&:nth-child(2)]:row-span-2">
          {ContactDetails.map((contact, i) => (
            <ContactCard
              index={i}
              key={i}
              icon={contact.icon}
              title={contact.title}
              info={contact.info}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
