import Creator from "@/components/Creator";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Summary from "@/components/Summary";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Creator />
      <Expertise />
      <Showcase />
  <Summary/>
    </main>
  );
}
