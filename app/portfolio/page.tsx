import Grid from "@/components/Portfolio/Grid";
import Hero from "@/components/Portfolio/Hero";
import React from "react";
import "./portfolio.css";
import Details from "@/components/Portfolio/Details";
import { FilterProvider } from "@/context/FilterContext";
import { ProjectProvider } from "@/context/ProjectContext";

export default function PortfolioPage() {
  return (
<ProjectProvider>
      <FilterProvider>
        <Hero />
        <Grid />
        <Details />
      </FilterProvider>
    </ProjectProvider>
  );
}
