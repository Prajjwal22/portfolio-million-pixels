import Grid from "@/components/Portfolio/Grid";
import Hero from "@/components/Portfolio/Hero";
import React from "react";
import "./portfolio.css"
import Details from "@/components/Portfolio/Details";

export default function PortfolioPage() {
  return (
    <>
      <Hero />
     
      <Grid/>
      <Details/>
     
    </>
  );
}
