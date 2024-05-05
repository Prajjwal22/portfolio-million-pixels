import React from "react";
import Card from "./Card";

export default function Grid() {
  return (
    <section className="relative z-50 flex items-center justify-center">
      <div className="max-w-6xl">
        <div className="grid grid-cols-4 gap-1 portfolio-grid ">
          <Card /> <Card /> <Card /> <Card /> <Card />
          <Card /> <Card /> <Card /> <Card /> <Card /><Card /><Card />
        </div>
      </div>
    </section>
  );
}
