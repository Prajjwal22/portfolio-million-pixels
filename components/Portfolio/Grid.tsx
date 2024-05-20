import React from "react";
import Card from "./Card";
import Button from "../Button";

export default function Grid() {
  return (
    <section className="relative font-poppins bg-secondary z-50 flex items-center justify-center px-2 pb-5">
      <div className="max-w-6xl flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-2 portfolio-grid mb-10">
          <Card /> <Card /> <Card /> <Card /> <Card />
          <Card /> <Card /> <Card /> <Card /> <Card />
          <Card />
          <Card />
        </div>
          <Button variant="Outlined" title="View all" />
      </div>
    </section>
  );
}
