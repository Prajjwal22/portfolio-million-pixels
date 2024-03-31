
import Creator from "@/components/Creator";
import Hero from "@/components/Hero";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <Creator />
    </main>
  );
}
