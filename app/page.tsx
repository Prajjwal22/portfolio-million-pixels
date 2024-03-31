import Creator from "@/components/Creator";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Creator/>
    </main>
  );
}
