import React from "react";
import Card from "./Card";
import Button from "../Button";

export default function Grid() {
  return (
    <section className="relative font-poppins z-50 flex items-center justify-center">
      <div className="max-w-6xl flex flex-col items-center justify-center">
        <div className="grid grid-cols-4 gap-1 portfolio-grid mb-10">
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
